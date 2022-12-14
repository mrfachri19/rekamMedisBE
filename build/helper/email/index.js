const nodemailer = require("nodemailer");

const hbs = require("nodemailer-express-handlebars");

const path = require("path");

require("dotenv").config();

const sendMail = data => new Promise((resolve, reject) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST_SMTP,
    port: process.env.PORT_SMTP,
    secure: false,
    auth: {
      user: process.env.EMAIL_SMTP,
      pass: process.env.PASS_SMTP
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  transporter.use("compile", hbs({
    viewEngine: {
      extname: ".html",
      partialsDir: path.resolve("./src/templates/email"),
      defaultLayout: false
    },
    viewPath: path.resolve("./src/templates/email"),
    extName: ".html"
  }));
  const mailOptions = {
    from: '"Tickitz Movie" <exampleemail581@gmail.com',
    to: data.to,
    subject: data.subject,
    template: data.template,
    context: data.data
  };

  if (data.attachment) {
    if (data.attachment.length > 0) {
      mailOptions.attachment = data.attachment;
    }
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      reject(error);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Email sent ! ${info.response}`);
      resolve(info.response);
    }
  }); // eslint-disable-next-line no-console

  console.log("SEND MAIL PROCESS WORKS!");
});

module.exports = sendMail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsImhicyIsInBhdGgiLCJjb25maWciLCJzZW5kTWFpbCIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJIT1NUX1NNVFAiLCJwb3J0IiwiUE9SVF9TTVRQIiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJFTUFJTF9TTVRQIiwicGFzcyIsIlBBU1NfU01UUCIsInRscyIsInJlamVjdFVuYXV0aG9yaXplZCIsInVzZSIsInZpZXdFbmdpbmUiLCJleHRuYW1lIiwicGFydGlhbHNEaXIiLCJkZWZhdWx0TGF5b3V0Iiwidmlld1BhdGgiLCJleHROYW1lIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGVtcGxhdGUiLCJjb250ZXh0IiwiYXR0YWNobWVudCIsImxlbmd0aCIsImVycm9yIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVyL2VtYWlsL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vZGVtYWlsZXIgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTtcbmNvbnN0IGhicyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyLWV4cHJlc3MtaGFuZGxlYmFyc1wiKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG5cbmNvbnN0IHNlbmRNYWlsID0gKGRhdGEpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkhPU1RfU01UUCxcbiAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlRfU01UUCxcbiAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NNVFAsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlBBU1NfU01UUCxcbiAgICAgIH0sXG4gICAgICB0bHM6IHtcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0cmFuc3BvcnRlci51c2UoXG4gICAgICBcImNvbXBpbGVcIixcbiAgICAgIGhicyh7XG4gICAgICAgIHZpZXdFbmdpbmU6IHtcbiAgICAgICAgICBleHRuYW1lOiBcIi5odG1sXCIsXG4gICAgICAgICAgcGFydGlhbHNEaXI6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3RlbXBsYXRlcy9lbWFpbFwiKSxcbiAgICAgICAgICBkZWZhdWx0TGF5b3V0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdmlld1BhdGg6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3RlbXBsYXRlcy9lbWFpbFwiKSxcbiAgICAgICAgZXh0TmFtZTogXCIuaHRtbFwiLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgICBmcm9tOiAnXCJUaWNraXR6IE1vdmllXCIgPGV4YW1wbGVlbWFpbDU4MUBnbWFpbC5jb20nLFxuICAgICAgdG86IGRhdGEudG8sXG4gICAgICBzdWJqZWN0OiBkYXRhLnN1YmplY3QsXG4gICAgICB0ZW1wbGF0ZTogZGF0YS50ZW1wbGF0ZSxcbiAgICAgIGNvbnRleHQ6IGRhdGEuZGF0YSxcbiAgICB9O1xuXG4gICAgaWYgKGRhdGEuYXR0YWNobWVudCkge1xuICAgICAgaWYgKGRhdGEuYXR0YWNobWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIG1haWxPcHRpb25zLmF0dGFjaG1lbnQgPSBkYXRhLmF0dGFjaG1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMsIChlcnJvciwgaW5mbykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyhgRW1haWwgc2VudCAhICR7aW5mby5yZXNwb25zZX1gKTtcbiAgICAgICAgcmVzb2x2ZShpbmZvLnJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKFwiU0VORCBNQUlMIFBST0NFU1MgV09SS1MhXCIpO1xuICB9KTtcbm1vZHVsZS5leHBvcnRzID0gc2VuZE1haWw7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBMUI7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxPQUFPLENBQUMsK0JBQUQsQ0FBbkI7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHRixPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQUEsT0FBTyxDQUFDLFFBQUQsQ0FBUCxDQUFrQkcsTUFBbEI7O0FBRUEsTUFBTUMsUUFBUSxHQUFJQyxJQUFELElBQ2YsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtFQUMvQixNQUFNQyxXQUFXLEdBQUdWLFVBQVUsQ0FBQ1csZUFBWCxDQUEyQjtJQUM3Q0MsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FEMkI7SUFFN0NDLElBQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFNBRjJCO0lBRzdDQyxNQUFNLEVBQUUsS0FIcUM7SUFJN0NDLElBQUksRUFBRTtNQUNKQyxJQUFJLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxVQURkO01BRUpDLElBQUksRUFBRVQsT0FBTyxDQUFDQyxHQUFSLENBQVlTO0lBRmQsQ0FKdUM7SUFRN0NDLEdBQUcsRUFBRTtNQUNIQyxrQkFBa0IsRUFBRTtJQURqQjtFQVJ3QyxDQUEzQixDQUFwQjtFQWFBZixXQUFXLENBQUNnQixHQUFaLENBQ0UsU0FERixFQUVFeEIsR0FBRyxDQUFDO0lBQ0Z5QixVQUFVLEVBQUU7TUFDVkMsT0FBTyxFQUFFLE9BREM7TUFFVkMsV0FBVyxFQUFFMUIsSUFBSSxDQUFDSyxPQUFMLENBQWEsdUJBQWIsQ0FGSDtNQUdWc0IsYUFBYSxFQUFFO0lBSEwsQ0FEVjtJQU1GQyxRQUFRLEVBQUU1QixJQUFJLENBQUNLLE9BQUwsQ0FBYSx1QkFBYixDQU5SO0lBT0Z3QixPQUFPLEVBQUU7RUFQUCxDQUFELENBRkw7RUFhQSxNQUFNQyxXQUFXLEdBQUc7SUFDbEJDLElBQUksRUFBRSw0Q0FEWTtJQUVsQkMsRUFBRSxFQUFFN0IsSUFBSSxDQUFDNkIsRUFGUztJQUdsQkMsT0FBTyxFQUFFOUIsSUFBSSxDQUFDOEIsT0FISTtJQUlsQkMsUUFBUSxFQUFFL0IsSUFBSSxDQUFDK0IsUUFKRztJQUtsQkMsT0FBTyxFQUFFaEMsSUFBSSxDQUFDQTtFQUxJLENBQXBCOztFQVFBLElBQUlBLElBQUksQ0FBQ2lDLFVBQVQsRUFBcUI7SUFDbkIsSUFBSWpDLElBQUksQ0FBQ2lDLFVBQUwsQ0FBZ0JDLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO01BQzlCUCxXQUFXLENBQUNNLFVBQVosR0FBeUJqQyxJQUFJLENBQUNpQyxVQUE5QjtJQUNEO0VBQ0Y7O0VBRUQ3QixXQUFXLENBQUNMLFFBQVosQ0FBcUI0QixXQUFyQixFQUFrQyxDQUFDUSxLQUFELEVBQVFDLElBQVIsS0FBaUI7SUFDakQsSUFBSUQsS0FBSixFQUFXO01BQ1RoQyxNQUFNLENBQUNnQyxLQUFELENBQU47SUFDRCxDQUZELE1BRU87TUFDTDtNQUNBRSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBZUYsSUFBSSxDQUFDRyxRQUFTLEVBQTFDO01BQ0FyQyxPQUFPLENBQUNrQyxJQUFJLENBQUNHLFFBQU4sQ0FBUDtJQUNEO0VBQ0YsQ0FSRCxFQXpDK0IsQ0FrRC9COztFQUNBRixPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNELENBcERELENBREY7O0FBc0RBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIxQyxRQUFqQiJ9