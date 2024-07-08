const sgMail = require("@sendgrid/mail");

exports.handler = async (event: any) => {
  const { name, email, message } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "your-email@example.com", // Your email address
    from: "noreply@example.com", // Your verified sender
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email." }),
    };
  }
};
