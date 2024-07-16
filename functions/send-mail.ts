require("dotenv").config();

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

  fetch("https://api.mailersend.com/v1/email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer mlsn.eb98adaad5577ff86981f2ded4e07fcde0051060d852bd14d42836b5d6b3169b`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw "";
      }
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent successfully" }),
      };
    })
    .catch(() => {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email" }),
      };
    });
};
