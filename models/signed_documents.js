const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('signed_documents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    document_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    echosign_agreement_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    docusign_envelope_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    docusign_edit_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    editor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>Created, 1=>Signed, 2=>Waiting for signature, 3=>Declined, 4=>Voided"
    },
    status_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    flg_from_template: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    flg_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    ext_ref: {
      type: DataTypes.JSON,
      allowNull: true
    },
    signatories: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active_signatory: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'signed_documents',
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
};
