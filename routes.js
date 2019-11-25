module.exports = function Routes(myWaiters){
    
    async function index(req, res) {
        res.render("index")
    }

    async function addWaiters(req, res) {

        let inputName = req.body.textBox;
        let checkBox = req.body.days;
        
        await myWaiters.theWaiters(inputName, checkBox)
        res.redirect('/')
        } 
        
    
    async function admin(req, res) {
        let listNames = await myWaiters.getWaiters()
        res.render("admin", {
            names: listNames
        })
    }
    return { 
        index,
        admin,
        addWaiters
    }
}