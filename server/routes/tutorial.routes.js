module.exports = app => {
    const dieSets = require("../controllers/dieSet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new dieSet
    router.post("/", dieSets.create);
  
    // Retrieve all dieSets
    router.get("/", dieSets.findAll);
  
    // Retrieve all published dieSets
    router.get("/published", dieSets.findAllPublished);
  
    // Retrieve a single dieSet with id
    router.get("/:id", dieSets.findOne);
  
    // Update a dieSet with id
    router.put("/:id", dieSets.update);
  
    // Delete a dieSet with id
    router.delete("/:id", dieSets.delete);
  
    // Delete all dieSets
    router.delete("/", dieSets.deleteAll);
  
    app.use('/api/dieSets', router);
  };

