const cron = require("node-cron");
const Ticket = require("../models/ticketNotification");
const Mailer = require("../services/email.service");
const { EMAIL, EMAIL_PASS } = require("../config/env.config");
const mailerCron = () => {
  const mailer = Mailer(EMAIL, EMAIL_PASS);
  cron.schedule("*/2 * * * *", async () => {
    //finding all the ticket with status as pending
    console.log("Executing cron again");
    const notificationsToBeSent = await Ticket.find({ status: "PENDING" });
    notificationsToBeSent.forEach((notification) => {
      const mailData = {
        from: "mba@support.com",
        to: notification.recipientEmails,
        subject: notification.subject,
        text: notification.content,
      };
      mailer.sendMail(mailData, async (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          const savedNotification = await Ticket.findOne({
            _id: notification._id,
          });
          savedNotification.status = "SUCCESS";
          await savedNotification.save();
          console.log("Cron done");
        }
      });
    });
  });
};
module.exports = mailerCron;
