import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class partner_documentation extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "partner_synd_id"
    },
    editor_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_submission_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'partner_documentation',
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
      {
        name: "partner_synd_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "partner_synd_id" },
        ]
      },
    ]
  });
  }
}
