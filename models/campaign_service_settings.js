import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class campaign_service_settings extends Model {
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
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "invoice"
    },
    allow_times: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "max time allocation"
    },
    allow_times_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    mtg_units: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 60,
      comment: "seconds"
    },
    spot_price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    spot_invoice: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    startDay: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0- sunday, 1 - monday"
    },
    spaces_available: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "1",
      comment: "spaces available per each REGULAR timed slot"
    },
    show_spaces_left: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1-show,0-not show"
    },
    show_multiple_spaces: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1-show,0-not show"
    },
    use_popup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1-show,0-not show"
    },
    coupon: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    time_before: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'campaign_service_settings',
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
