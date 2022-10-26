import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dd_dataroom_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    room_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    list_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    room_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    room_desc: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    master_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    user: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    syndicate_resources: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'dd_dataroom_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "room_id" },
        ]
      },
      {
        name: "subject_id",
        using: "BTREE",
        fields: [
          { name: "subject_id" },
        ]
      },
    ]
  });
  }
}
