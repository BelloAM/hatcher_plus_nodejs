import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class investment_round_old extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    base_round: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    shortform: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'investment_round_old',
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
