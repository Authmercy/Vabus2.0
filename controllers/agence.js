import mysql from 'mysql'
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "vabus"
});
import asyncHandler from "express-async-handler";
export const createAgence = async (req, res, next) => {
   
  
    try {
      const q =  "INSERT INTO Agence(`nomAgence`, `tel`, `mail`, `direction` ) VALUES (?)";
      
      const values = [
        req.body.nomAgence,
        req.body.tel,
        req.body.mail,
        req.body.direction,
      ];
      db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    } catch (err) {
      next(err);
    }
  };

// Get all Agences
export const getAgences = asyncHandler(async (req, res) => {
  const q =  "SELECT * FROM Agence"
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Get single Agence
export const getAgence =async (req, res, next) => {
  try {
    const AgenceId = req.params.id ;
    const q =  "SELECT * FROM Agence WHERE idAgence = ?";

    
    db.query(q, [AgenceId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);});
  } catch (err) {
    next(err);
  }
};
// Delete Agence
export const deleteAgence = async (req, res, next) => {
  try {
    const AgenceId = req.params.id;
  const q = " DELETE FROM Agence WHERE idAgence= ? ";

  db.query(q, [AgenceId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
  } catch (err) {
    next(err);
  }
};

// Update Agence
export const updateAgence = async (req, res, next) => {
  
    
    try {
      const AgenceId = req.params.id;
      const q=  "UPDATE Agence SET `nomAgence`=?,`tel`=?,`mail`=?,`direction`=? WHERE idAgence = ?";

      const values = [
        req.body.nomAgence,
      
        req.body.tel,
        req.body.mail,
        req.body.direction,
        
      ];
      db.query(q, [...values,AgenceId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    
    
  } catch (err) {
    next(err);
  }
}

