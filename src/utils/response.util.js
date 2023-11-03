const { loggerGenerator } = require("../payloads/apilog.payload");
const { insertLog } = require("../queries/apilog.query");

function generateTxId() {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXY123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const responseSuccess = async (req, res, code, message, data) => {
  const txId = generateTxId(code);
  return res.status(200).send({
    success: true,
    message: `Success - ${message} - ${txId}`,
    data,
  });
};

const responseError = async (req, res, code, message, data) => {
  const txId = generateTxId();
  insertLog(loggerGenerator(req, code, message, txId));
  return res.status(code).send({
    success: false,
    message: `Error - ${message} - ${txId}`,
  });
};

module.exports = { responseSuccess, responseError };
