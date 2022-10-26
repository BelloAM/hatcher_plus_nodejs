import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class contents extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1010
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    event_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    view_status: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "1",
      comment: "1=no NDA required, 2=NDA needed, 3= User confidential"
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    ext_ref: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "box.com doc_id or internal URL"
    },
    ext: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    signed_document_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    privileged_document: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    box_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    doc_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    flg_box_content: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    flg_box_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    flg_signable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    flg_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    org_access_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 10
    },
    synd_access_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 10
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transcript: {
      type: DataTypes.JSON,
      allowNull: true
    },
    transcription_lang: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contents',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "content_id",
        using: "BTREE",
        fields: [
          { name: "content_id" },
        ]
      },
      {
        name: "room_id",
        using: "BTREE",
        fields: [
          { name: "room_id" },
        ]
      },
      {
        name: "event_date",
        using: "BTREE",
        fields: [
          { name: "event_date" },
        ]
      },
      {
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
    ]
  });
  }
}
