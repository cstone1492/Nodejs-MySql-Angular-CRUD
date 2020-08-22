const db = require("../models");
const DieSet = db.dieSet;
const Op = db.Sequelize.Op;

// Create and Save a new dieSet
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a dieSet
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    includedDice: req.body.includedDice
  };

  // Save dieSet in the database
  DieSet.create(dieSet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the dieSet."
      });
    });
};

// Retrieve all dieSets from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  DieSet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dieSets."
      });
    });
};

// Find a single dieSet with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  DieSet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving dieSet with id=" + id
      });
    });
};

// Update a dieSet by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  DieSet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DieSet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update dieSet with id=${id}. Maybe dieSet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating dieSet with id=" + id
      });
    });
};

// Delete a dieSet with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  DieSet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DieSet was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete dieSet with id=${id}. Maybe dieSet was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete dieSet with id=" + id
      });
    });
};

// Delete all dieSets from the database.
exports.deleteAll = (req, res) => {
  DieSet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} dieSets were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all dieSets."
      });
    });
};

// find all published dieSet
exports.findAllPublished = (req, res) => {
  DieSet.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dieSets."
      });
    });
};