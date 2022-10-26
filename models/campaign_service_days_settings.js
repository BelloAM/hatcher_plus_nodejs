import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class campaign_service_days_settings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idService: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    spots: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    maxDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    daysBefore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0- sunday, 1 - monday"
    },
    payment_method: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "invoice"
    },
    coupon: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    showPrice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'campaign_service_days_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idService" },
        ]
      },
    ]
  });
  }
}
