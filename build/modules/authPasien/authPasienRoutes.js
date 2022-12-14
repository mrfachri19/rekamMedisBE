const express = require("express");

const Router = express.Router();

const authPasienController = require("./authPasienController");

Router.post("/registerpasien", authPasienController.registerPasien);
Router.post("/loginpasien", authPasienController.loginPasien);
module.exports = Router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsIlJvdXRlciIsImF1dGhQYXNpZW5Db250cm9sbGVyIiwicG9zdCIsInJlZ2lzdGVyUGFzaWVuIiwibG9naW5QYXNpZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aFBhc2llbi9hdXRoUGFzaWVuUm91dGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuXHJcbmNvbnN0IFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5jb25zdCBhdXRoUGFzaWVuQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2F1dGhQYXNpZW5Db250cm9sbGVyXCIpO1xyXG5cclxuUm91dGVyLnBvc3QoXCIvcmVnaXN0ZXJwYXNpZW5cIiwgIGF1dGhQYXNpZW5Db250cm9sbGVyLnJlZ2lzdGVyUGFzaWVuKTtcclxuUm91dGVyLnBvc3QoXCIvbG9naW5wYXNpZW5cIiwgYXV0aFBhc2llbkNvbnRyb2xsZXIubG9naW5QYXNpZW4pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZXI7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUVBLE1BQU1DLE1BQU0sR0FBR0YsT0FBTyxDQUFDRSxNQUFSLEVBQWY7O0FBRUEsTUFBTUMsb0JBQW9CLEdBQUdGLE9BQU8sQ0FBQyx3QkFBRCxDQUFwQzs7QUFFQUMsTUFBTSxDQUFDRSxJQUFQLENBQVksaUJBQVosRUFBZ0NELG9CQUFvQixDQUFDRSxjQUFyRDtBQUNBSCxNQUFNLENBQUNFLElBQVAsQ0FBWSxjQUFaLEVBQTRCRCxvQkFBb0IsQ0FBQ0csV0FBakQ7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixNQUFqQiJ9