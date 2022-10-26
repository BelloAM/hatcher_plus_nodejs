import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tmp_pwc_orgs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    o_company: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    o_friendly_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    excel_contact_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pwc_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kw1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    kw2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    kw3: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tmp_pwc_orgs',
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
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
      {
        name: "o_company",
        using: "BTREE",
        fields: [
          { name: "o_company" },
        ]
      },
      {
        name: "o_friendly_name",
        using: "BTREE",
        fields: [
          { name: "o_friendly_name" },
        ]
      },
      {
        name: "kw_1",
        using: "BTREE",
        fields: [
          { name: "kw1" },
        ]
      },
      {
        name: "pwc_order",
        using: "BTREE",
        fields: [
          { name: "pwc_order" },
        ]
      },
      {
        name: "excel_contact_email",
        using: "BTREE",
        fields: [
          { name: "excel_contact_email" },
        ]
      },
    ]
  });
  }
}
