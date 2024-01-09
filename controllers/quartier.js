
import asyncHandler from "express-async-handler";
import mysql from 'mysql'
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "vabus"
});
export const createQuartier = async (req, res, next) => {
   
  
    try {
      const q =  "INSERT INTO Quartier(`nom`, `ville`,`idAgence` ) VALUES (?)";
      
      const values = [
        req.body.nom,
        req.body.ville,
        req.body.idAgence,
       
      ];
      db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    } catch (err) {
      next(err);
    }
  };

// Get all Quartiers
export const getQuartiers = asyncHandler(async (req, res) => {
  const q =  "SELECT * FROM Quartier"
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Get single Quartier
export const getQuartier =async (req, res, next) => {
  try {
    const QuartierId = req.params.id;
    const q = await "SELECT * FROM Quartier WHERE idQuartier = ?";

    res.status(200).json(Quartier);
    db.query(q, [QuartierId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);});
  } catch (err) {
    next(err);
  }
};
// Delete Quartier
export const deleteQuartier = async (req, res, next) => {
  try {
    const QuartierId = req.params.id;
  const q = " DELETE FROM Quartier WHERE idQuartier = ? ";

  db.query(q, [QuartierId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
  } catch (err) {
    next(err);
  }
};

// Update Quartier
export const updateQuartier = async (req, res, next) => {
  
    
    try {
      const QuartierId = req.params.id;
      const q=  "UPDATE Quartier SET `nom`=?, `ville`=? , `idAgence`=? WHERE idQuartier = ?";

      const values = [
        req.body.nom,
        req.body.ville,
        req.body.idAgence
        
      ];
      db.query(q, [...values,QuartierId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    
    
  } catch (err) {
    next(err);
  }
}

