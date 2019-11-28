module.exports = function Routes(myWaiters){
    
    async function index(req, res) {
        res.render("index")
    }

    async function Waiters(req, res) {

        let inputName = req.body.textBox;
        let checkBox = req.body.days;
        console.log(inputName, checkBox);
        
        await myWaiters.addWaiters(inputName, checkBox)
        res.redirect('/')
        } 
        
    
    async function admin(req, res) {
        let listNames = await myWaiters.getWaiters()
        console.log("list",listNames);
        
        res.render("/waiters:username", {
            names: listNames,
        
        })
    }
    return { 
        index,
        admin,
        Waiters
    }
}