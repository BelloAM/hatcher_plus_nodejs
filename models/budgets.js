import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class budgets extends Model {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    account: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    growth: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false,
      defaultValue: 2.00
    },
    brake: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 1.00
    },
    updated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2012: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2013: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2014: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2015: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2016: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2017: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2018: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2019: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2020: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2021: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M1_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M2_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M3_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M4_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M5_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M6_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M7_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M8_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M9_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M10_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M11_2022: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    M12_2022: {
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
    tableName: 'budgets',
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
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
    ]
  });
  }
}
