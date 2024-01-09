
import asyncHandler from "express-async-handler";
import mysql from 'mysql'
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "vabus"
});
export const createReservation = async (req, res, next) => {
   
  
    try {
      const q =  "INSERT INTO Reservation ( `nmPlace`, `Datedepart`, `nomAgence`, `nomCategory`, `Villedepart`, `Villedestination`) VALUES (?)";

      const values = [
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

// Get all Reservations
export const getReservations = asyncHandler(async (req, res) => {
  const q =  "SELECT * FROM Reservation"
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Get single Reservation
export const getReservation =async (req, res, next) => {
  try {
    const ReservationId = req.params.id;
    const q = await "SELECT * FROM Reservation WHERE nom = ?";

    db.query(q, [ReservationId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);});
  } catch (err) {
    next(err);
  }
};
// Delete Reservation
export const deleteReservation = async (req, res, next) => {
  try {
    const ReservationId = req.params.id;
  const q = " DELETE FROM Reservation WHERE nom = ? ";

  db.query(q, [ReservationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
  } catch (err) {
    next(err);
  }
};

// Update Reservation
export const updateReservation = async (req, res, next) => {
  
    
    try {
      const ReservationId = req.params.id;
      const q=  "UPDATE Reservation SET(`nmPlace`=?, `Datedepart`=?, `nomAgence`=?, `nomCategory`=?, `Villedepart`=?, `Villedestination`=?) WHERE nom= ?";

      const values = [
        req.body.nmPlace,
        req.body.Datedepart,
        req.body.nomAgence,
        req.body.nomCategory,
        req.body.Villedepart,
        req.body.Villedestination,
        
      ];
      db.query(q, [...values,ReservationId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    
    
  } catch (err) {
    next(err);
  }
}

