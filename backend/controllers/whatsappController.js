const {sendOtpThroughCelitix,} = require("../services/celitixService");

const sendWhatsAppOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        message: "Phone number and OTP are required",
      });
    }

    const phoneString = String(phone).trim();

    if (!/^[6-9]\d{9}$/.test(phoneString)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid 10-digit Indian mobile number",
      });
    }

    const formattedPhone = `91${phoneString}`;

    const result = await sendOtpThroughCelitix(
      formattedPhone,
      String(otp)
    );

    return res.json({
      success: true,
      message: "WhatsApp OTP sent successfully",
      data: result,
    });

  } catch (error) {
    console.error(
      "WhatsApp OTP Error:",
      error.response?.data || error.message
    );

    return res.status(error.response?.status || 500).json({
      success: false,
      message: "Failed to send WhatsApp OTP",
      error: error.response?.data || error.message,
    });
  }
};

module.exports = {
  sendWhatsAppOtp,
};