//creates tutorials table in MySQL database
module.exports = (sequelize, Sequelize) => {
    const dieSet = sequelize.define("dieSet", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      includedDice: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };