import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const port = 3001;

const db = new sqlite3.Database('./database/sfr_5g.db', (err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err.message);
  } else {
    console.log('Connecté à la base de données.');
  }
});

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    db.all("SELECT * FROM sfr_5g", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({
          message: 'Données récoltées !',
          data: rows
        });
    });
});

app.listen(port, () => {
    console.log("Le serveur est en fonctionnement.");
});