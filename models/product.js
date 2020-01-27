const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('101', 'root', 'valkira2', {
  host: 'localhost',
  dialect: 'mysql'
});
class Product extends Model {}
Product.init({
  // attributes
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, { sequelize, modelName: 'products' });

module.exports = Product;

