import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class index_cooley_vc_value_by_series extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    series_a: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: false
    },
    series_b: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: false
    },
    series_c: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: false
    },
    series_d_and_higher: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_cooley_vc_value_by_series',
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
