import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dd_form extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    form_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    field_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dd_form',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "content_id" },
        ]
      },
      {
        name: "form_type",
        using: "BTREE",
        fields: [
          { name: "form_type" },
        ]
      },
    ]
  });
  }
}
