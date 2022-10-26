import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class industry_3 extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cluster: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    key_stored: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "key_stored"
    },
    value_stored: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    linkedin_ref: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ref_value: {
      type: DataTypes.STRING(199),
      allowNull: false
    },
    wiki_entry: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    wiki_keywords: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'industry_3',
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
        name: "key_stored",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key_stored" },
        ]
      },
    ]
  });
  }
}
