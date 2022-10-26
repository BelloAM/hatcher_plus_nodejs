import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class email_campaigns extends Model {
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
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    campaign_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ext_campaign_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ext_list_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ext_verified_sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    from_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    from_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    link_to_template: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'email_campaigns',
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
