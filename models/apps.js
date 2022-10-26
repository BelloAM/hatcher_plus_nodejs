import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class apps extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    friendly_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    default_setting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    shared: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    setup: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: "http:\/\/hatcher.com\/images\/hatcher_tree.png"
    },
    link: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    production: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    user_auth: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    custom_setup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'apps',
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
    ]
  });
  }
}
