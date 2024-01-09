import mysql from 'mysql'
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "vabus"
});
import asyncHandler from "express-async-handler";
export const createBus= async (req, res, next) => {
   
  
    try {
      const q =  "INSERT INTO `bus`(`idBus`, `nmPlace`, `Datedepart`, `nomAgence`, `nomCategory`, `Villedepart`, `Villedestination`) VALUES (?)";
  
      const values = [
        req.body.idBus,
        req.body.nmPlace,
        req.body.Datedepart,
        req.body.nomAgence,
        req.body.nomCategory,
        req.body.Villedepart,
        req.body.Villedestination,

      
      ];
      db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    } catch (err) {
      next(err);
    }
  };

// Get all Categorys
export const getBuss = asyncHandler(async (req, res) => {
  const q =  "SELECT * FROM bus"
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Get single Category
export const getBus =async (req, res, next) => {
  try {
    const CategoryId = req.params.id;
    const q = await "SELECT * FROM bus WHERE idBus = ?";

    db.query(q, [CategoryId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);});
  } catch (err) {
    next(err);
  }
};
export const getBusSpecifique =async (req, res, next) => {
  try {
    const { nomAgence, Villedepart, Villedestination } = req.params;
    const q = "SELECT * FROM bus WHERE nomAgence=? AND Villedepart=? AND Villedestination=?";

    db.query(q, [nomAgence, Villedepart, Villedestination], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  } catch (err) {
    next(err);
  }
};
// Delete Category
export const deleteBus = async (req, res, next) => {
  try {
    const CategoryId = req.params.id;
  const q = " DELETE FROM Bus WHERE id = ? ";

  db.query(q, [CategoryId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
  } catch (err) {
    next(err);
  }
};

// Update Category
export const updateBus = async (req, res, next) => {
  
    
    try {
      const CategoryId = req.params.id;
      const q=  "UPDATE bus SET( `nmPlace`=?, `Datedepart`=?, `nomAgence`=?, `nomCategory`=?, `Villedepart`=?, `Villedestination`=?) WHERE idBus = ?";

      const values = [
        req.body.idBus,
        req.body.nmPlace,
        req.body.Datedepart,
        req.body.nomAgence,
        req.body.nomCategory,
        req.body.Villedepart,
        req.body.Villedestination,

        
      ];
      db.query(q, [...values,CategoryId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    
    
  } catch (err) {
    next(err);
  }
}
