const {default: Axios} = require("axios");

const apiHelperCoverage = Axios.create({
  baseURL: "https://www.emsifa.com/api-wilayah-indonesia/api/",
});

module.exports = { apiHelperCoverage };