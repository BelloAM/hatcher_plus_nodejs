import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class access_links extends Model {
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
      allowNull: false
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active_page: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    return_param: {
      type: DataTypes.JSON,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "dataroom"
    },
    validity: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "expiring"
    },
    recipient: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    recipient_org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    access_key: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    recipient_response: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0=no response, 1= hit login page, 2= successful login"
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'access_links',
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
        name: "email",
        using: "BTREE",
        fields: [
          { name: "recipient" },
        ]
      },
    ],
    createdAt:"created",
    deletedAt:"deleted_at"
  });
  }
}
