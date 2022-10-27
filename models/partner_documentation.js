const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_documentation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "partner_synd_id"
    },
    editor_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_submission_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'partner_documentation',
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
        name: "partner_synd_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "partner_synd_id" },
        ]
      },
    ]
  });
};
