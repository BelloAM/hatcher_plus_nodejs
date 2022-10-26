import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class campaign_schedule extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idItem: {
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
    day_num: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'campaign_schedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idItem" },
        ]
      },
    ]
  });
  }
}
