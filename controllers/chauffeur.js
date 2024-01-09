import asyncHandler from "express-async-handler";
import mysql from 'mysql'
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "vabus"
});
export const createChauffeur = async (req, res, next) => {
   
  
    try {
      const q =  "INSERT INTO chauffeur(`nom`, `prenom`, `email`, `cni`,`tel`,`idAgence` ) VALUES (?)";
     
      const values = [
        req.body.nom,
        req.body.prenom,
        req.body.email,
        req.body.cni,
        req.body.tel,
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

// Get all Chauffeurs
export const getChauffeurs = asyncHandler(async (req, res) => {
  const q =   "SELECT * FROM chauffeur"
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Get single Chauffeur
export const getChauffeur =async (req, res, next) => {
  try {
    const chauffeurId = req.params.id;
    const q = await "SELECT * FROM chauffeur WHERE idChauffeur = ?";

    db.query(q, [chauffeurId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);});
  } catch (err) {
    next(err);
  }
};
// Delete Chauffeur
export const deleteChauffeur = async (req, res, next) => {
  try {
    const chauffeurId = req.params.id;
  const q = " DELETE FROM chauffeur WHERE idChauffeur = ? ";

  db.query(q, [chauffeurId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
  } catch (err) {
    next(err);
  }
};

// Update Chauffeur
export const updateChauffeur = async (req, res, next) => {
  
    
    try {
      const chauffeurId = req.params.id;
      const q=  "UPDATE chauffeur SET `nom`=?, `prenom`=?, `email`=?, `cni`=?,`tel`=?, `idAgence`=? WHERE idChauffeur = ?";

      const values = [
        req.body.nom,
        req.body.prenom,
        req.body.email,
        req.body.cni,
        req.body.tel,
        req.body.idAgence,
      ];
      db.query(q, [...values,chauffeurId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    
    
  } catch (err) {
    next(err);
  }
}

