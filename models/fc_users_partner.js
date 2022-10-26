import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class fc_users_partner extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fc_partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fc_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fc_users_partner',
    timestamps: true,
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
