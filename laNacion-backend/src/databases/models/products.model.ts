import { DataTypes } from 'sequelize';
import { sequelize } from '.';
import { Category } from './category.model';
import { Status } from './status.model';

export const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sku: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT('medium'),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'Product',
  },
);

Product.belongsTo(Category, { foreignKey: 'category_id' });
Product.belongsTo(Status, { foreignKey: 'status_id' });
