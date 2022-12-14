const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org_types', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "1",
      comment: "0=not investor,1=direct,2=LP,3=advisor"
    },
    type: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    type_status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'org_types',
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
