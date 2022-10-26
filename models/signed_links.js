import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class signed_links extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    signature: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expires: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "UNIX Timestamp for when the link expires"
    },
    as_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "When set user is logged in"
    },
    recipient_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "User this link was sent to"
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "Issuing Syndicate"
    },
    use_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    persist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    reusable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'signed_links',
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
    ]
  });
  }
}
