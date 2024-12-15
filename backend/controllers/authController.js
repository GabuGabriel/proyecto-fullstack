import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/db.js";

export const register = async (req, res) => {
  const { username, email, password, profileImage } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (username, email, password, profile_image) VALUES ($1, $2, $3, $4) RETURNING id, username, email",
      [username, email, hashedPassword, profileImage || null]
    );

    const token = jwt.sign({ id: result.rows[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ user: result.rows[0], token });
  } catch (err) {
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (!result.rows.length) return res.status(401).json({ error: "Credenciales inválidas" });

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ error: "Credenciales inválidas" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ user: { id: user.id, username: user.username, email: user.email }, token });
  } catch (err) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};
