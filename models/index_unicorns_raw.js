import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class index_unicorns_raw extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    valuation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    threshold_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sector: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    investors: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_unicorns_raw',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
