/* eslint-disable guard-for-in */

/* eslint-disable no-restricted-syntax */
const obatModel = require("./obatModel");

const helperWrapper = require("../../helper/wrapper");

module.exports = {
  getAllObat: async (req, res) => {
    try {
      let {
        page,
        limit,
        search,
        sort
      } = req.query;
      page = Number(page) || 1;
      limit = Number(limit) || 10;
      search = search || "";
      sort = sort || "nama_obat ASC";
      let offset = page * limit - limit;
      const totalData = await obatModel.getCountObat(search);
      const totalPage = Math.ceil(totalData / limit);

      if (totalPage < page) {
        offset = 0;
        page = 1;
      }

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData
      };
      const result = await obatModel.getAllObat(limit, offset, search, sort);

      if (result.length < 1) {
        return helperWrapper.response(res, 200, `Data not found !`, []);
      }

      return helperWrapper.response(res, 200, "Success get data", result, pageInfo);
    } catch (error) {
      return helperWrapper.response(res, 400, `Bad request (${error.message})`, null);
    }
  },
  postObat: async (req, res) => {
    try {
      const {
        nama_obat,
        stok,
        harga
      } = req.body;
      const setData = {
        nama_obat,
        stok,
        harga
      };
      const result = await obatModel.postObat(setData);
      return helperWrapper.response(res, 200, "Succes create data", result);
    } catch (error) {
      return helperWrapper.response(res, 400, `bad request (${error.message})`, null);
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJvYmF0TW9kZWwiLCJyZXF1aXJlIiwiaGVscGVyV3JhcHBlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRBbGxPYmF0IiwicmVxIiwicmVzIiwicGFnZSIsImxpbWl0Iiwic2VhcmNoIiwic29ydCIsInF1ZXJ5IiwiTnVtYmVyIiwib2Zmc2V0IiwidG90YWxEYXRhIiwiZ2V0Q291bnRPYmF0IiwidG90YWxQYWdlIiwiTWF0aCIsImNlaWwiLCJwYWdlSW5mbyIsInJlc3VsdCIsImxlbmd0aCIsInJlc3BvbnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwicG9zdE9iYXQiLCJuYW1hX29iYXQiLCJzdG9rIiwiaGFyZ2EiLCJib2R5Iiwic2V0RGF0YSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29iYXQvb2JhdENvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuY29uc3Qgb2JhdE1vZGVsID0gcmVxdWlyZShcIi4vb2JhdE1vZGVsXCIpO1xuY29uc3QgaGVscGVyV3JhcHBlciA9IHJlcXVpcmUoXCIuLi8uLi9oZWxwZXIvd3JhcHBlclwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEFsbE9iYXQ6IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgeyBwYWdlLCBsaW1pdCwgc2VhcmNoLCBzb3J0IH0gPSByZXEucXVlcnk7XG4gICAgICBwYWdlID0gTnVtYmVyKHBhZ2UpIHx8IDE7XG4gICAgICBsaW1pdCA9IE51bWJlcihsaW1pdCkgfHwgMTA7XG4gICAgICBzZWFyY2ggPSBzZWFyY2ggfHwgXCJcIjtcbiAgICAgIHNvcnQgPSBzb3J0IHx8IFwibmFtYV9vYmF0IEFTQ1wiO1xuXG4gICAgICBsZXQgb2Zmc2V0ID0gcGFnZSAqIGxpbWl0IC0gbGltaXQ7XG4gICAgICBjb25zdCB0b3RhbERhdGEgPSBhd2FpdCBvYmF0TW9kZWwuZ2V0Q291bnRPYmF0KHNlYXJjaCk7XG4gICAgICBjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmNlaWwodG90YWxEYXRhIC8gbGltaXQpO1xuXG4gICAgICBpZiAodG90YWxQYWdlIDwgcGFnZSkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICBwYWdlID0gMTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFnZUluZm8gPSB7XG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHRvdGFsUGFnZSxcbiAgICAgICAgbGltaXQsXG4gICAgICAgIHRvdGFsRGF0YSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9iYXRNb2RlbC5nZXRBbGxPYmF0KGxpbWl0LCBvZmZzZXQsIHNlYXJjaCwgc29ydCk7XG5cbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gaGVscGVyV3JhcHBlci5yZXNwb25zZShyZXMsIDIwMCwgYERhdGEgbm90IGZvdW5kICFgLCBbXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWxwZXJXcmFwcGVyLnJlc3BvbnNlKFxuICAgICAgICByZXMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgXCJTdWNjZXNzIGdldCBkYXRhXCIsXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgcGFnZUluZm9cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBoZWxwZXJXcmFwcGVyLnJlc3BvbnNlKFxuICAgICAgICByZXMsXG4gICAgICAgIDQwMCxcbiAgICAgICAgYEJhZCByZXF1ZXN0ICgke2Vycm9yLm1lc3NhZ2V9KWAsXG4gICAgICAgIG51bGxcbiAgICAgICk7XG4gICAgfVxuICB9LFxuXG4gIHBvc3RPYmF0OiBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBuYW1hX29iYXQsIHN0b2ssIGhhcmdhIH0gPSByZXEuYm9keTtcbiAgICAgIGNvbnN0IHNldERhdGEgPSB7XG4gICAgICAgIG5hbWFfb2JhdCxcbiAgICAgICAgc3RvayxcbiAgICAgICAgaGFyZ2EsXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb2JhdE1vZGVsLnBvc3RPYmF0KHNldERhdGEpO1xuICAgICAgcmV0dXJuIGhlbHBlcldyYXBwZXIucmVzcG9uc2UocmVzLCAyMDAsIFwiU3VjY2VzIGNyZWF0ZSBkYXRhXCIsIHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBoZWxwZXJXcmFwcGVyLnJlc3BvbnNlKFxuICAgICAgICByZXMsXG4gICAgICAgIDQwMCxcbiAgICAgICAgYGJhZCByZXF1ZXN0ICgke2Vycm9yLm1lc3NhZ2V9KWAsXG4gICAgICAgIG51bGxcbiAgICAgICk7XG4gICAgfVxuICB9LFxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7QUFDQSxNQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBLE1BQU1DLGFBQWEsR0FBR0QsT0FBTyxDQUFDLHNCQUFELENBQTdCOztBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7RUFDZkMsVUFBVSxFQUFFLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtJQUM5QixJQUFJO01BQ0YsSUFBSTtRQUFFQyxJQUFGO1FBQVFDLEtBQVI7UUFBZUMsTUFBZjtRQUF1QkM7TUFBdkIsSUFBZ0NMLEdBQUcsQ0FBQ00sS0FBeEM7TUFDQUosSUFBSSxHQUFHSyxNQUFNLENBQUNMLElBQUQsQ0FBTixJQUFnQixDQUF2QjtNQUNBQyxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0osS0FBRCxDQUFOLElBQWlCLEVBQXpCO01BQ0FDLE1BQU0sR0FBR0EsTUFBTSxJQUFJLEVBQW5CO01BQ0FDLElBQUksR0FBR0EsSUFBSSxJQUFJLGVBQWY7TUFFQSxJQUFJRyxNQUFNLEdBQUdOLElBQUksR0FBR0MsS0FBUCxHQUFlQSxLQUE1QjtNQUNBLE1BQU1NLFNBQVMsR0FBRyxNQUFNZixTQUFTLENBQUNnQixZQUFWLENBQXVCTixNQUF2QixDQUF4QjtNQUNBLE1BQU1PLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLFNBQVMsR0FBR04sS0FBdEIsQ0FBbEI7O01BRUEsSUFBSVEsU0FBUyxHQUFHVCxJQUFoQixFQUFzQjtRQUNwQk0sTUFBTSxHQUFHLENBQVQ7UUFDQU4sSUFBSSxHQUFHLENBQVA7TUFDRDs7TUFFRCxNQUFNWSxRQUFRLEdBQUc7UUFDZlosSUFEZTtRQUVmUyxTQUZlO1FBR2ZSLEtBSGU7UUFJZk07TUFKZSxDQUFqQjtNQU9BLE1BQU1NLE1BQU0sR0FBRyxNQUFNckIsU0FBUyxDQUFDSyxVQUFWLENBQXFCSSxLQUFyQixFQUE0QkssTUFBNUIsRUFBb0NKLE1BQXBDLEVBQTRDQyxJQUE1QyxDQUFyQjs7TUFFQSxJQUFJVSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7UUFDckIsT0FBT3BCLGFBQWEsQ0FBQ3FCLFFBQWQsQ0FBdUJoQixHQUF2QixFQUE0QixHQUE1QixFQUFrQyxrQkFBbEMsRUFBcUQsRUFBckQsQ0FBUDtNQUNEOztNQUVELE9BQU9MLGFBQWEsQ0FBQ3FCLFFBQWQsQ0FDTGhCLEdBREssRUFFTCxHQUZLLEVBR0wsa0JBSEssRUFJTGMsTUFKSyxFQUtMRCxRQUxLLENBQVA7SUFPRCxDQXBDRCxDQW9DRSxPQUFPSSxLQUFQLEVBQWM7TUFDZCxPQUFPdEIsYUFBYSxDQUFDcUIsUUFBZCxDQUNMaEIsR0FESyxFQUVMLEdBRkssRUFHSixnQkFBZWlCLEtBQUssQ0FBQ0MsT0FBUSxHQUh6QixFQUlMLElBSkssQ0FBUDtJQU1EO0VBQ0YsQ0E5Q2M7RUFnRGZDLFFBQVEsRUFBRSxPQUFPcEIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0lBQzVCLElBQUk7TUFDRixNQUFNO1FBQUVvQixTQUFGO1FBQWFDLElBQWI7UUFBbUJDO01BQW5CLElBQTZCdkIsR0FBRyxDQUFDd0IsSUFBdkM7TUFDQSxNQUFNQyxPQUFPLEdBQUc7UUFDZEosU0FEYztRQUVkQyxJQUZjO1FBR2RDO01BSGMsQ0FBaEI7TUFLQSxNQUFNUixNQUFNLEdBQUcsTUFBTXJCLFNBQVMsQ0FBQzBCLFFBQVYsQ0FBbUJLLE9BQW5CLENBQXJCO01BQ0EsT0FBTzdCLGFBQWEsQ0FBQ3FCLFFBQWQsQ0FBdUJoQixHQUF2QixFQUE0QixHQUE1QixFQUFpQyxvQkFBakMsRUFBdURjLE1BQXZELENBQVA7SUFDRCxDQVRELENBU0UsT0FBT0csS0FBUCxFQUFjO01BQ2QsT0FBT3RCLGFBQWEsQ0FBQ3FCLFFBQWQsQ0FDTGhCLEdBREssRUFFTCxHQUZLLEVBR0osZ0JBQWVpQixLQUFLLENBQUNDLE9BQVEsR0FIekIsRUFJTCxJQUpLLENBQVA7SUFNRDtFQUNGO0FBbEVjLENBQWpCIn0=