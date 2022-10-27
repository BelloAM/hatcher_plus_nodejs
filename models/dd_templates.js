const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dd_templates', {
    template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    form_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    template_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    template_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    list_order_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mandate_match_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    required_fields_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    threshold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 650
    },
    check_entropy: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    check_length: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    check_threshold: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    check_ticket: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    markov_chains: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    filter_stopwords: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    check_regions: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    check_stages: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    check_clusters: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    cloned_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    flg_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'dd_templates',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "template_id" },
        ]
      },
    ]
  });
};
