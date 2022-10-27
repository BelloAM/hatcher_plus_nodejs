const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('page_configurations', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    page: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    access: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: "{\\r\\n\"get\":10,\\r\\n\"post\":\"10\",\\r\\n\"put\":10,\\r\\n\"delete\":\"10\"\\r\\n}"
    },
    config: {
      type: DataTypes.JSON,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'page_configurations',
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
        name: "syndicate_page",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page" },
          { name: "synd_id" },
        ]
      },
    ]
  });
};
