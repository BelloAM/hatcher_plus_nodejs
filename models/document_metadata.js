import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class document_metadata extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "hatcher"
    },
    provider_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'document_metadata',
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
        name: "document_metadata_provider_id_synd_id_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "provider_id" },
          { name: "synd_id" },
        ]
      },
    ]
  });
  }
}
