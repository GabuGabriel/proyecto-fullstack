const express = require('express');
const router = express.Router();

// Rutas base (ejemplo)
router.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

module.exports = router;
