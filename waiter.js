module.exports = function Waiters(pool) {

    async function addWaiters(param) {

        let input = param
        await pool.query('INSERT INTO waiters (name_) VALUES ($1);', [input])
       
        // let waiters = await pool.query('SELECT * FROM waiters WHERE days_ = $1', [input])
        
        //      await pool.query('UPDATE admins SET days_ = days_ WHERE name_ = $1', [input])

        // } else {
       
        //}
        // return waiters
    }
    async function getWaiter(){
        let waiter = await pool.query('SELECT * FROM  waiters WHERE name_ = $1')
        return waiter
    }


    async function getWaiters() {
        let waiters = await pool.query('SELECT * FROM waiters')
        return waiters.rows
    }

    async function getDays() {
        let days = await pool.query('SELECT * FROM admins');
        return days.rows
    }
    return {
        addWaiters,
        getWaiters,
        getDays,
        getWaiter
    }
}