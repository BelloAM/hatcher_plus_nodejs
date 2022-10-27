const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    app: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    active_page: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: "active_page"
    },
    title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "viewed"
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    forex: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    restriction_level: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0=none, 1=must be logged in, 2=profile owners, 5=staff, 8=dev and superadmin"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pages',
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
        name: "active_page",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "active_page" },
        ]
      },
    ]
  });
};
