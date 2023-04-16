var Userdb = require('../model/model')

//Create And Save New User
exports.create=(req,res)=>{
  
if(!req.body){
    res.status(400).send({message:"Content Cannot be Empty"})
return ;
}
//new User

const user = new Userdb({
    name : req.body.name,
    email : req.body.email,
    gender: req.body.gender,
    status : req.body.status
})
console.log(user)
// save user in the database
user
    .save(user)
    .then(data => {
        var string = encodeURIComponent("Done")
  res.redirect("/add-user?valid="+string)
    })
    .catch(err =>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    });

}


//Update User
exports.update=(req,res)=>{
    if(!req.body){
        res.status(400)
        .send({message:"Content Cannot be Empty"})
        return ;
    }

    const id = req.params['id']

    Userdb
    .findByIdAndUpdate(id,req.body,
        {useFindAndModify:false})
    .then(data=>{
        if(!data)
        {
            res.status(400)
            .send({message:`Cannot Update User ${id}`})
            
        }else{
            console.log(data);
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    })
}

//Delete User
exports.delete=(req,res)=>{
    if(!req.body){
        res.status(400)
        .send({message:"Content Cannot be Empty"})
        return ;
    }
    const id = req.params['id']

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data)
        {
            res.status(400)
            .send({message:`Cannot Delete User ${id}`})
            
        }else{
            res.send("Deleted SuccessFully")
        }
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    })
}

//Get ALl User
exports.getAll=(req,res)=>{
    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    })
}

exports.getById=(req,res)=>{
    if(!req.body){
        res.status(400)
        .send({message:"Content Cannot be Empty"})
        return ;
    }

    const id = req.query.id
    console.log(id)
    Userdb.findById(id)
    .then(user =>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    })

}