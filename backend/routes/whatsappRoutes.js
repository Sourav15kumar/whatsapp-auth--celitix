const express=require("express");
const router=express.Router();

const {sendWhatsAppOtp, }=require("../controllers/whatsappController");

router.post("/send-otp",sendWhatsAppOtp);

module.exports=router;