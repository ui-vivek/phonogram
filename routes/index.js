const express=require('express')

const router=express.Router();
const homeController=require('../controllers/home_controller')

router.get('/',homeController.home)
router.use('/user',require('./users'))
router.use('/about',require('./about'))
router.use('/post',require('./posts'))
// for any further routes, access from here
// router.use('/routerName', require('./routerfile));



module.exports=router;