import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authenticateToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [req.userId]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener perfil" });
  }
});

export default router;
