import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class index_funds_hypo_2 extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    return_mult: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    size_10: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_25: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_50: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_100: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_200: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_400: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_600: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_800: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_funds_hypo_2',
    timestamps: false
  });
  }
}
