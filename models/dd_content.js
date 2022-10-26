import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dd_content extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1010
    },
    event_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    view_status: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "1",
      comment: "1=no NDA required, 2=NDA needed, 3= User confidential"
    },
    ext_ref: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "box.com doc_id or internal URL"
    },
    echo_sign_library_id: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    added: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1436501175
    },
    modified: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flg_signable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    signed_document_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    signing_order: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0",
      comment: "CSV of user IDs in Order of signing sequence (0=>Refers to active User)"
    },
    flg_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    flg_box_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    flg_box_content: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    box_data: {
      type: DataTypes.JSON,
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'dd_content',
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
    ]
  });
  }
}
