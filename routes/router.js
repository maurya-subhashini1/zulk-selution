const express=require("express")
const { createEpishode, getListOfEpishode, deletedEpishode, updateEpishode } = require("../controller/epishodes")
const { createProfile, Login } = require("../controller/profiles")
const { createshow, getShowData, deleteShow, updateShow } = require("../controller/show")
const { authentication } = require("../Middelware/auth")

const router=express.Router()

router.post("/create/show",authentication,createshow)
router.get("/get/show/list",authentication,getShowData)
router.delete("/delete/show",authentication,deleteShow)
router.put("/update/shows/:id",authentication,updateShow)


// epishode

router.post("/create/epishode",authentication,createEpishode)
router.get("/get/epishode/list",authentication,getListOfEpishode)
router.delete("/delete/epishode",authentication,deletedEpishode)
router.put("/update/epishode/:id",authentication,updateEpishode)


// for authentication

router.post("/create/profile",createProfile)
router.post("/login",Login)

module.exports=router