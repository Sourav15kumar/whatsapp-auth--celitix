const axios = require("axios");

const sendOtpThroughCelitix = async (phone, otp) => {
  const response = await axios.post(
    `${process.env.CELITIX_BASE_URL}/wrapper/waba/message`,
    {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: phone,
      type: "template",
      template: {
        name: process.env.CELITIX_TEMPLATE_NAME,
        language: {
          code: "en",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: otp,
              },
            ],
          },
          {
            type: "button",
            sub_type: "url",
            index: "0",
            parameters: [
              {
                type: "text",
                text: otp,
              },
            ],
          },
        ],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        key: process.env.CELITIX_API_KEY,
        wabaNumber: process.env.CELITIX_WABA_NUMBER,
      },
    }
  );

  return response.data;
};

module.exports = {
  sendOtpThroughCelitix,
};