import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class org_metrics extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    metrics_org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    alexa_rank: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    backlings: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    competitor_rankings: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    competitors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    crunchbase_status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    domain_authority: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    domains_linking_in: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    facebook_likes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    linkedin_ceo_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    linkedin_followers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    organic_traffic: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    website_analytics: {
      type: DataTypes.JSON,
      allowNull: true
    },
    twitter_followers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    web_ssl_found: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'org_metrics',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "metrics_org_id" },
        ]
      },
    ]
  });
  }
}
