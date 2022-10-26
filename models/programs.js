import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class programs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    program_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    program_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    program_name_long: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    program_country: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    program_allows_nonresident: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    program_allows_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    program_admin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    program_admin_org: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1711
    },
    program_link: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    program_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'programs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "program_id" },
        ]
      },
    ]
  });
  }
}
