import { DataTypes } from 'sequelize';
import { sequelize } from '.';

export const Status = sequelize.define(
  'Status',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: 'Status',
  },
);
