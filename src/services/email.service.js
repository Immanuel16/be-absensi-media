const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const mailConfig = require("../configs/email.config");
const moment = require("moment");
const transporter = nodemailer.createTransport(mailConfig);

const sendMailRegister = async (payload, res) => {
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve("./src/templates/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/templates/"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  const mailOptions = {
    from: mailConfig.auth.user,
    to: payload.email,
    subject: "Info Akun Apps Media",
    template: "email-register",
    context: {
      username: payload.username,
      password: payload.password,
      full_name: payload.full_name,
    },
  };
  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
};

const sendMailChangePassword = async (payload, res) => {
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve("./src/templates/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/templates/"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  const mailOptions = {
    from: mailConfig.auth.user,
    to: payload.email,
    subject: "Info Forgot Password Apps Media",
    template: "email-forgot-password",
    context: {
      password: payload.password,
      full_name: payload.full_name,
    },
  };
  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      return responseError(req, res, httpStatus.ERROR_GENERAL, err, null);
    } else {
      console.log("success");
    }
  });
};

const sendMailRequestShooting = async (payload, res) => {
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve("./src/templates/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/templates/"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  moment().locale("id");

  const mailOptions = {
    from: mailConfig.auth.user,
    to: "simamora_joshua@yahoo.com",
    subject: "Info Permintaan Jadwal Shooting",
    template: "email-request-shooting",
    context: {
      name: payload.name,
      division: payload.division,
      tanggal: moment(payload.request_date).format("DD MMMM YYYY"),
      description: payload.description,
    },
  };
  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
};

module.exports = {
  sendMailRegister,
  sendMailRequestShooting,
  sendMailChangePassword,
};
