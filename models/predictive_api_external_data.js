import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class predictive_api_external_data extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    predictive_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    predictive_score_reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    full_result: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'predictive_api_external_data',
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
