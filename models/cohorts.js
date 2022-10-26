import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cohorts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    cohort_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cohort_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cohort_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    availability: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    deadline_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    invite_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mailchimp_list_id: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    terms_and_conditions: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    terms_and_conditions_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cohort_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    judging_panel_min_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    judging_panel_max_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    deal_equ_percent: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    deal_currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "USD"
    },
    deal_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    connect_with_startups: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cohorts',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cohort_id" },
        ]
      },
      {
        name: "synd_id",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
        ]
      },
    ]
  });
  }
}
