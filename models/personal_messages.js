import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class personal_messages extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    recipient: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sender: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('s','r'),
      allowNull: false,
      defaultValue: "s"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sent_from_synd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    campaign_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    datetime_sent: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    sender_deleted: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    recipient_deleted: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'personal_messages',
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
