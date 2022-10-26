import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class governance_issues extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    overdue_gov: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "None"
    },
    overdue_tax: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "None"
    },
    penalties: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    issues_hr: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "None"
    },
    issues_legal: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "None"
    },
    issues_other: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "None"
    },
    added: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'governance_issues',
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
