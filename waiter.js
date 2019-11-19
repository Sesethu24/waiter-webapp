module.exports = function Waiters(pool){
    
    async function theWaiters (param) {
        let input = param
        let days = await pool.query('SELECT * FROM admins WHERE days_ = $1', [input])
        return days
    }

    async function getWaiters () {
        let names = await pool.query('SELECT * FROM waiters')
        return names.rows
    }

    async function getDays () {
        let days = await pool.query('SELECT * FROM admins');
        return days.rows
    }
    return {
        theWaiters,
        getWaiters,
        getDays
    }
}
