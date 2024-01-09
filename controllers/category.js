import mysql from 'mysql'
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "vabus"
});
import asyncHandler from "express-async-handler";
export const createCategory = async (req, res, next) => {
   
  
    try {
      const q =  "INSERT INTO Category(`nomCategory`) VALUES (?)";
  
      const values = [
        req.body.nomCategory,
     
        
      
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
export const getCategorys = asyncHandler(async (req, res) => {
  const q =  "SELECT * FROM Category"
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Get single Category
export const getCategory =async (req, res, next) => {
  try {
    const CategoryId = req.params.id;
    const q =  "SELECT * FROM Category WHERE idCategory = ?";

   
    db.query(q, [CategoryId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);});
  } catch (err) {
    next(err);
  }
};
// Delete Category
export const deleteCategory = async (req, res, next) => {
  try {
    const CategoryId = req.params.id;
  const q = " DELETE FROM Category WHERE idCategory = ? ";

  db.query(q, [CategoryId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
  } catch (err) {
    next(err);
  }
};

// Update Category
export const updateCategory = async (req, res, next) => {
  
    
    try {
      const CategoryId = req.params.id;
      const q=  "UPDATE Category SET `nomCategory`=? WHERE idCategory= ?";

      const values = [
        req.body.nomcategory,
  
 
     
        
      ];
      db.query(q, [...values,CategoryId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
    
    
  } catch (err) {
    next(err);
  }
}
