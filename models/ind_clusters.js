import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ind_clusters extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    orig: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    new: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ind_clusters',
    timestamps: false
  });
  }
}
