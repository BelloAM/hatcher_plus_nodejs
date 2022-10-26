import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class index_early_stage extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    seed: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    series_a: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    series_b: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    series_c: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    series_d: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    series_e: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    early_stage_index: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    multiple: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_early_stage',
    timestamps: false,
    indexes: [
      {
        name: "id",
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
