import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class investment_rounds extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    round_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    next_round_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    alt_names: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    round_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "org"
    },
    base_round: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    registration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dealflow_stage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    min_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    synd_delete_info: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'investment_rounds',
    timestamps: false,
    paranoid: true,
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
