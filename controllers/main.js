const CustomAPIError = require("../errors/custom-error")

const login = async(req,res)=>{
    const {username,password}=req.body
    if(!username || !password){
        throw new CustomAPIError('Please provide valid username and password',400)
    }
    res.send('Fake login/register/signup route')
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg:`hello vaibhav`,secret:`Here is your authorized data your lucky number is ${luckyNumber}`})
}

module.exports={
    login,
    dashboard
}
