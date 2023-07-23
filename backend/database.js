const { Pool } = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'german_food',
    password: 'postgres',
    port: 5432
});

const query = (sql, param) => {
    return pool.query(sql, param);
};

const selectUser = async (email) => {

    const sqlSelect = 'select email, senha, nome, id from public.usuario where email=$1'
    const paramsSelect = [email]
    const results = await query(sqlSelect, paramsSelect)
    
    if (results.rowCount === 0){
        return null
    }
    return results.rows[0];
}

const selectUserId = async (id) => {
    const sqlSelect = 'select email, senha, nome, id from public.usuario where id=$1'
    const paramsSelect = [id]
    const results = await query(sqlSelect, paramsSelect)

    if (results.rowCount === 0){
        return null
    }
    return results.rows[0];
}

module.exports = {
    query,
    selectUser,
    selectUserId
}