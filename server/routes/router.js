const express = require('express');

const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/controller')

//homeRoutes/addUserRoute/updateUserRoute is imported from services js 
//where routing functions are exported 
route.get("/",services.homeRoute)

route.get("/add-user",services.addUserRoute)

route.get("/update-user",services.updateUserRoute)

//API
route.post("/users",controller.create)
route.get("/users/get",controller.getAll)
route.get("/users/getById",controller.getById)
route.put("/users/update/:id",controller.update)
route.delete("/users/delete/:id",controller.delete)


module.exports= route