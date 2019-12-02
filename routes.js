module.exports = function Routes(myWaiters) {

    async function index(req, res) {
        res.render("index", {
            waiters: myWaiters.getWaiters()
        })
    }
    async function WaitersPage(req, res) {

        let inputName = req.body.textBox;
        let checkBox = req.body.days;
        await myWaiters.addWaiters(inputName, checkBox)
        res.redirect('/')
    }
    async function adminPage(req, res) {
        let listNames = await myWaiters.getWaiters()
        res.render("/waiters:username", {
            names: listNames,
        })
    }
    return {
        index,
        adminPage,
        WaitersPage
    }
}