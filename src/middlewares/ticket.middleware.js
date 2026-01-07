const { STATUS } = require("../utils/constants");
const {
  successResponseBody,
  errorResponseBody,
} = require("../utils/responseBody");
const verifyTicketNotificationCreateRequest = async (req, res, next) => {
  if (!req.body.subject) {
    errorResponseBody.err = "No subject given for the email";
    return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
  }
  if (!req.body.content) {
    errorResponseBody.err = "No content given for the email";
    return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
  }
  if (
    !req.body.recipientEmails ||
    !(req.body.recipientEmails instanceof Array) ||
    req.body.recipientEmails.length <= 0
  ) {
    errorResponseBody.err - "No recipient emails given";
    return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
  }
  next();
};

module.exports = {
  verifyTicketNotificationCreateRequest,
};
