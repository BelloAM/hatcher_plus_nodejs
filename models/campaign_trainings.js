import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class campaign_trainings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trainingDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    trainingDateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trainingTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    spaces: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    entryFee: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    payment_method: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "invoice"
    },
    payment_required: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    max_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    allow_multiple: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      comment: "1- yes 2 - no"
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    repeate: {
      type: DataTypes.ENUM('year','month','week','day'),
      allowNull: false
    },
    repeate_interval: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recurring: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    recurringEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    coupon: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    map_link: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    deposit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'campaign_trainings',
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
