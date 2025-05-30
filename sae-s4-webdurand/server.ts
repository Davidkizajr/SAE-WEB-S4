import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const port = 3001;

const db = new sqlite3.Database("./database/sfr_5g.db", (err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données:", err.message);
  } else {
    console.log("Connecté à la base de données.");
  }
});

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  const page = parseInt(req.query.page as string);
  const pageSize = 15;

  const offset = (page - 1) * pageSize;

  db.get("SELECT COUNT(*) AS count FROM sfr_5g", [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    const totalItems = row.count;
    const totalPages = Math.ceil(totalItems / pageSize);

    db.all(
      "SELECT * FROM sfr_5g LIMIT ? OFFSET ?",
      [pageSize, offset],
      (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({
          message: "Données récoltées !",
          data: rows,
          totalItems: totalItems,
          totalPages: totalPages,
          page: page,
        });
      }
    );
  });
});

app.get("/api/all", (req, res) => {
  db.all("SELECT * FROM sfr_5g", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({
      message: "Données récoltées !",
      data: rows,
    });
  });
});

app.listen(port, () => {
  console.log("Le serveur est en fonctionnement.");
});
