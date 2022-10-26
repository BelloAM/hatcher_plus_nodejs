import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class fund_accounts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fund_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    label_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    viewable: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "1"
    },
    editable: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'fund_accounts',
    timestamps: true,
    paranoid: true,
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
        name: "fund_id",
        using: "BTREE",
        fields: [
          { name: "fund_id" },
        ]
      },
    ]
  });
  }
}
