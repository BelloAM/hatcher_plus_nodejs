import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class profile_claim extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
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
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Guest"
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    org_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    profile_claim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    signup_ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'profile_claim',
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
        name: "last_name",
        using: "BTREE",
        fields: [
          { name: "last_name" },
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
