const { apiHelperCoverage } = require("../utils/axios.util");
const { responseSuccess } = require("../utils/response.util");
const { httpStatus } = require("../variables/response.variable");

const getListProvince = async (req, res) => {
  try {
    const { data } = await apiHelperCoverage.get("provinces.json");
    data.map(d => {
      d.name = d.name.toLowerCase()
    })
    return responseSuccess(req, res, httpStatus.SUCCESS, "", data);
  } catch (error) {
    return responseError(
      req,
      res,
      httpStatus.ERROR_GENERAL,
      error.message,
      null
    );
  }
};

const getListCity = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await apiHelperCoverage.get(`regencies/${id}.json`);
    data.map(d => {
      d.name = d.name.toLowerCase()
    })
    return responseSuccess(req, res, httpStatus.SUCCESS, "", data);
  } catch (error) {
    return responseError(
      req,
      res,
      httpStatus.ERROR_GENERAL,
      error.message,
      null
    );
  }
};

const getListDistrict = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await apiHelperCoverage.get(`districts/${id}.json`);
    data.map(d => {
      d.name = d.name.toLowerCase()
    })
    return responseSuccess(req, res, httpStatus.SUCCESS, "", data);
  } catch (error) {
    return responseError(
      req,
      res,
      httpStatus.ERROR_GENERAL,
      error.message,
      null
    );
  }
};

const getListSubDistrict = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await apiHelperCoverage.get(`villages/${id}.json`);
    data.map(d => {
      d.name = d.name.toLowerCase()
    })
    return responseSuccess(req, res, httpStatus.SUCCESS, "", data);
  } catch (error) {
    return responseError(
      req,
      res,
      httpStatus.ERROR_GENERAL,
      error.message,
      null
    );
  }
};

module.exports = { getListProvince, getListCity, getListDistrict, getListSubDistrict };
