const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dd_investor_performance', {
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
    program_period_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    applicants_per_program: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    participants_per_program: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    funded_participants_per_program: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avg_valuation_upon_application: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avg_valuation_upon_funding: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dd_investor_performance',
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
