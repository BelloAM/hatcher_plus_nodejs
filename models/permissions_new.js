import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class permissions_new extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    owner_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0=>Api Service\n1=>User\n2=>Org\n3=>Syndicate\n4=>User Type"
    },
    object_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "user_id | org_id | synd_id | page name |route name"
    },
    object_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    permission: {
      type: DataTypes.JSON,
      allowNull: false
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'permissions_new',
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
