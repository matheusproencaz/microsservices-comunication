import Sequelize from "sequelize";

const sequelize = new Sequelize("auth-db", "admin", "123456", {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true
    },
    logging: false,
});

sequelize
.authenticate()
.then(() => {
    console.info('Connection has been stablished!')
})
.catch(err => {
    console.error('Unabled to connect to the database.')
    console.error(err.message)
});

export default sequelize;