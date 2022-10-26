import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class document_templates extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Template creator"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    owner_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>SYSTEM,1=>USER,2=>ORG,3=>SYNDICATE"
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ext_ref: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    docusign_template_id: {
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
    flg_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'document_templates',
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
