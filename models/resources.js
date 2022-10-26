import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class resources extends Model {
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
      allowNull: false,
      defaultValue: 1
    },
    creator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    folder: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "Hatcher Library"
    },
    source_country: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    format: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "EN"
    },
    url: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "1"
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "golden_egg.jpg"
    }
  }, {
    sequelize,
    tableName: 'resources',
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
    ]
  });
  }
}
