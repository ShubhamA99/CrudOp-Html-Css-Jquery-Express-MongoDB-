
const axios = require('axios');




exports.homeRoute = (req,res)=>{
    axios.get('http://localhost:8080/users/get')
    .then(function(response){
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
    
}

exports.addUserRoute = (req,res)=>{
   
    res.render("add_user");
}

exports.updateUserRoute = (req,res)=>{
    console.log(req.query.id);
axios.get("http://localhost:8080/users/getById",{params:{id:req.query.id}})
        .then(function(response){
            res.render("update_user",{user:response.data});
        })
        .catch(err=>{
            res.send(err);
        })
}


