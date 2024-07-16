require("dotenv").config();
const axios = require("axios");

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  const data = {
    from: {
      email,
      name,
    },
    to: [
      {
        email: "rodinshrestha@gmail.com",
        name: "Rodin Shrestha",
      },
    ],
    subject: `New Contact Us Message from ${name}`,
    text: message,
  };

  try {
    const response = await axios.post(
      "https://api.mailersend.com/v1/email",
      data,
      {
        headers: {
          Authorization: `Bearer mlsn.eb98adaad5577ff86981f2ded4e07fcde0051060d852bd14d42836b5d6b3169b`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
