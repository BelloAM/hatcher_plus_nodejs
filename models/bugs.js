import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class bugs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    component_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "JIRA COMPONENT ID"
    },
    jira_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    feature: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20
    },
    subject: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    page: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    edited_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    next_action_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    flg_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'bugs',
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
  }
}
