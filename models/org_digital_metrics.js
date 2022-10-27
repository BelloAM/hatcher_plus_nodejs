const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org_digital_metrics', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    added: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fb_likes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fb_talking_about: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fb_checkins: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fb_were_here: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gg_plus_one: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gg_circled_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    li_followers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tw_followers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tw_statuses: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tw_profile_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    yt_subscribers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yt_uploads: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yt_views: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yt_comments: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    web_lang: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    web_length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    web_links_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    web_tools_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    web_ssl_found: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    web_ssl_valid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    feid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fejp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    fejr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ffb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ffspl0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffspl9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fgplus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fipl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fjd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fjf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fjid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fjp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    fjr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    flan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fmrp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    fmrr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fnid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fspf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fsplc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fspp: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    fsps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fspsc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ftrp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    ftrr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ftw: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fuid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuspl9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pda: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    pdar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ped: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    peid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pejp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    pejr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pfspl0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pfspl9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pib: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pjb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pjd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pjid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pjip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pjp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    pjr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pmrp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    pmrr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ptrp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    ptrr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    puid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puspl9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ued: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ueid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uemrp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    uemrr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ufq: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ufspl0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ufspl9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uib: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uifq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uipl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ujb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ujfq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ujid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ujp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ujpl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ulc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    umrp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    umrr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upa: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    upar: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    upl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ur: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    urid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    urrid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    us: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    utrp: {
      type: DataTypes.DECIMAL(15,13),
      allowNull: true
    },
    utrr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uuspl0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuspl9: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'org_digital_metrics',
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
        name: "added",
        using: "BTREE",
        fields: [
          { name: "added" },
        ]
      },
    ]
  });
};
