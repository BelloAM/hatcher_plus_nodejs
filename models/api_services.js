const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_services', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    client_id: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    client_secret: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    private_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    public_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flg_active: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "1"
    },
    flg_delete: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "0"
    },
    test_column: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'api_services',
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
};
