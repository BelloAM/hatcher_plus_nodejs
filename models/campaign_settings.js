import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class campaign_settings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    option_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "option_name"
    },
    option_value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'campaign_settings',
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
      {
        name: "option_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_name" },
        ]
      },
    ]
  });
  }
}
