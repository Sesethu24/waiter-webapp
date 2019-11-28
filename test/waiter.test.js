const assert = require('assert');
const Waiters = require('../waiter');
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://sesh:pg123@localhost:5432/waiter_tests';

const pool = new Pool({
    connectionString
});

describe('The waiter web app', function () {

    beforeEach(async function () {
        await pool.query("delete from waiters;");
        await pool.query("delete from admins;");
    });

    it('should be able to add a waiter', async function () {
        let instance = Waiters(pool);
        await instance.addWaiters('Josh');
        let waiters = await instance.getWaiters();
        assert.equal(1, waiters.length);
    });

    after(function () {
        pool.end();
    })
});