import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class campaign_votes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    syndicate_org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    down: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    up: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'campaign_votes',
    timestamps: true,
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
      {
        name: "duplicate_vote_blocker",
        using: "BTREE",
        fields: [
          { name: "campaign_id" },
          { name: "user_id" },
          { name: "deleted_at" },
        ]
      },
    ]
  });
  }
}
