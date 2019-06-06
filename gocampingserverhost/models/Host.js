const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    // 'host_list ',
    'host',
    {
        /*
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
        */
        host_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        host_acc: {
            type: Sequelize.STRING
        },
        host_pwd: {
            type: Sequelize.STRING
        },
        host_incName: {
            type: Sequelize.STRING
        },
        // 2019-05-27 add
        host_incVat: {
            type: Sequelize.STRING
        },
        host_incTel: {
            type: Sequelize.STRING
        },
        host_incFax: {
            type: Sequelize.STRING
        },
        host_incEmail: {
            type: Sequelize.STRING
        },
        host_incAdd: {
            type: Sequelize.STRING
        },
        host_bankName: {
            type: Sequelize.STRING
        },
        host_bankAcc: {
            type: Sequelize.STRING
        },
    },
    {
        // 自定義表名
        'freezeTableName': true,
        'tableName': 'host_list',
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        timestamps: false
    }
)


