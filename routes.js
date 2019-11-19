module.exports = function Routes(myWaiters){
    
    async function index(req, res) {
        res.render("index")
    }

    async function admin(req, res) {
        let listNames = await myWaiters.getWaiters()
        res.render("admin", {
            names: listNames
        })
    }
    return { 
        index,
        admin
    }
}