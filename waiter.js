module.exports = function Waiters(pool) {

    async function addWaiters(param) {

        let input = param
        await pool.query('INSERT INTO waiters (name_,days_) VALUES ($1,$2);', [input, 1])
       
        // let waiters = await pool.query('SELECT * FROM waiters WHERE days_ = $1', [input])
        // UPDATE table
        // SET column1 = value1,
        //     column2 = value2 ,...
        // WHERE
        //    condition;
        // if (waiters.rows.length === 1) {
        //   console.log(input);
          
        //      await pool.query('UPDATE admins SET days_ = days_ WHERE name_ = $1', [input])

        // } else {
       
        //}
        // return waiters
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
        getDays
    }
}