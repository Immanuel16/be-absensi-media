const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const mailConfig = require("../configs/email.config")

const transporter = nodemailer.createTransport(mailConfig);

const sendMailRegister = async(payload, res) => {
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./src/templates/'),
      defaultLayout: false
    },
    viewPath: path.resolve('./src/templates/'),
  };

  transporter.use("compile", hbs(handlebarOptions));

  const mailOptions = {
    from: mailConfig.auth.user,
    to: payload.email,
    subject: 'Info Akun Apps Media',
    template: 'email-register',
    context: {
      username: payload.username,
      password: payload.password,
      full_name: payload.full_name
    }
  };
  transporter.sendMail(mailOptions, function(err) {
    if(err){
      console.log(err)
    }else {
      console.log('success');
    }
  });
}

module.exports = {sendMailRegister}