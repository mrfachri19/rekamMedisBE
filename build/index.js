const express = require("express");

const morgan = require("morgan");

const cors = require("cors");

const xss = require("xss-clean");

const helmet = require("helmet");

const compression = require("compression");

const bodyParser = require("body-parser");

require("dotenv").config();

const routerNavigation = require("./routes"); // ./routes/index.js


const app = express();
const port = process.env.PORT;
app.use(morgan("dev"));
app.use(cors());
app.options("http://localhost:3000", cors());
app.use(xss());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/", routerNavigation);
app.use("/*", (request, response) => {
  response.status(404).send("PATCH not found !");
}); // app.get("/", (request, response) => {
//   response.status(200);
//   response.send("hello world !");
// });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`express app is listen on port ${port} !`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsIm1vcmdhbiIsImNvcnMiLCJ4c3MiLCJoZWxtZXQiLCJjb21wcmVzc2lvbiIsImJvZHlQYXJzZXIiLCJjb25maWciLCJyb3V0ZXJOYXZpZ2F0aW9uIiwiYXBwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwidXNlIiwib3B0aW9ucyIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJzdGF0aWMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5jb25zdCBtb3JnYW4gPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xuY29uc3QgeHNzID0gcmVxdWlyZShcInhzcy1jbGVhblwiKTtcbmNvbnN0IGhlbG1ldCA9IHJlcXVpcmUoXCJoZWxtZXRcIik7XG5jb25zdCBjb21wcmVzc2lvbiA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xuY29uc3Qgcm91dGVyTmF2aWdhdGlvbiA9IHJlcXVpcmUoXCIuL3JvdXRlc1wiKTsgLy8gLi9yb3V0ZXMvaW5kZXguanNcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQ7XG5cbmFwcC51c2UobW9yZ2FuKFwiZGV2XCIpKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC5vcHRpb25zKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIGNvcnMoKSk7XG5hcHAudXNlKHhzcygpKTtcbmFwcC51c2UoaGVsbWV0KCkpO1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiKSk7XG5cbmFwcC51c2UoXCIvXCIsIHJvdXRlck5hdmlnYXRpb24pO1xuXG5hcHAudXNlKFwiLypcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gIHJlc3BvbnNlLnN0YXR1cyg0MDQpLnNlbmQoXCJQQVRDSCBub3QgZm91bmQgIVwiKTtcbn0pO1xuLy8gYXBwLmdldChcIi9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4vLyAgIHJlc3BvbnNlLnN0YXR1cygyMDApO1xuLy8gICByZXNwb25zZS5zZW5kKFwiaGVsbG8gd29ybGQgIVwiKTtcbi8vIH0pO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS5sb2coYGV4cHJlc3MgYXBwIGlzIGxpc3RlbiBvbiBwb3J0ICR7cG9ydH0gIWApO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBdkI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFDQSxNQUFNRSxJQUFJLEdBQUdGLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLE1BQU1HLEdBQUcsR0FBR0gsT0FBTyxDQUFDLFdBQUQsQ0FBbkI7O0FBQ0EsTUFBTUksTUFBTSxHQUFHSixPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFDQSxNQUFNSyxXQUFXLEdBQUdMLE9BQU8sQ0FBQyxhQUFELENBQTNCOztBQUNBLE1BQU1NLFVBQVUsR0FBR04sT0FBTyxDQUFDLGFBQUQsQ0FBMUI7O0FBQ0FBLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBa0JPLE1BQWxCOztBQUNBLE1BQU1DLGdCQUFnQixHQUFHUixPQUFPLENBQUMsVUFBRCxDQUFoQyxDLENBQThDOzs7QUFFOUMsTUFBTVMsR0FBRyxHQUFHVixPQUFPLEVBQW5CO0FBQ0EsTUFBTVcsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBekI7QUFFQUosR0FBRyxDQUFDSyxHQUFKLENBQVFiLE1BQU0sQ0FBQyxLQUFELENBQWQ7QUFDQVEsR0FBRyxDQUFDSyxHQUFKLENBQVFaLElBQUksRUFBWjtBQUNBTyxHQUFHLENBQUNNLE9BQUosQ0FBWSx1QkFBWixFQUFxQ2IsSUFBSSxFQUF6QztBQUNBTyxHQUFHLENBQUNLLEdBQUosQ0FBUVgsR0FBRyxFQUFYO0FBQ0FNLEdBQUcsQ0FBQ0ssR0FBSixDQUFRVixNQUFNLEVBQWQ7QUFDQUssR0FBRyxDQUFDSyxHQUFKLENBQVFULFdBQVcsRUFBbkI7QUFDQUksR0FBRyxDQUFDSyxHQUFKLENBQVFSLFVBQVUsQ0FBQ1UsVUFBWCxDQUFzQjtFQUFFQyxRQUFRLEVBQUU7QUFBWixDQUF0QixDQUFSO0FBQ0FSLEdBQUcsQ0FBQ0ssR0FBSixDQUFRUixVQUFVLENBQUNZLElBQVgsRUFBUjtBQUNBVCxHQUFHLENBQUNLLEdBQUosQ0FBUWYsT0FBTyxDQUFDb0IsTUFBUixDQUFlLFFBQWYsQ0FBUjtBQUVBVixHQUFHLENBQUNLLEdBQUosQ0FBUSxHQUFSLEVBQWFOLGdCQUFiO0FBRUFDLEdBQUcsQ0FBQ0ssR0FBSixDQUFRLElBQVIsRUFBYyxDQUFDTSxPQUFELEVBQVVDLFFBQVYsS0FBdUI7RUFDbkNBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEIsbUJBQTFCO0FBQ0QsQ0FGRCxFLENBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFkLEdBQUcsQ0FBQ2UsTUFBSixDQUFXZCxJQUFYLEVBQWlCLE1BQU07RUFDckI7RUFDQWUsT0FBTyxDQUFDQyxHQUFSLENBQWEsaUNBQWdDaEIsSUFBSyxJQUFsRDtBQUNELENBSEQifQ==