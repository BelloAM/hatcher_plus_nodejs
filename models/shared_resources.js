import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class shared_resources extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    object_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    object_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 => Content, 1 => Folder, 2 => Dataroom, 3 => Campaign, 3 => Org, 4 => Syndicate, 5=> Deal, 6=> Fund, 7=>Specified Fund"
    },
    audience_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    audience_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0=>User 1=>Org 2=>Syndicate"
    },
    access: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: "Type of access in JSON format e.g {\"read\":true,\"write\":false,\"version\":true,\"share\":true}"
    },
    relationship: {
      type: DataTypes.JSON,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'shared_resources',
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
        name: "object_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "object_id" },
          { name: "object_type" },
          { name: "audience_id" },
          { name: "audience_type" },
        ]
      },
    ]
  });
  }
}
