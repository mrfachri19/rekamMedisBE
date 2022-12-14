module.exports = {
  response: (response, status, msg, data, pagination) => {
    const result = {};
    result.status = status || 200;
    result.msg = msg;
    result.data = data;
    result.pagination = pagination;
    return response.status(result.status).json(result);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJtc2ciLCJkYXRhIiwicGFnaW5hdGlvbiIsInJlc3VsdCIsImpzb24iXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVyL3dyYXBwZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlc3BvbnNlOiAocmVzcG9uc2UsIHN0YXR1cywgbXNnLCBkYXRhLCBwYWdpbmF0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LnN0YXR1cyA9IHN0YXR1cyB8fCAyMDA7XG4gICAgcmVzdWx0Lm1zZyA9IG1zZztcbiAgICByZXN1bHQuZGF0YSA9IGRhdGE7XG4gICAgcmVzdWx0LnBhZ2luYXRpb24gPSBwYWdpbmF0aW9uO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhyZXN1bHQuc3RhdHVzKS5qc29uKHJlc3VsdCk7XG4gIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQ2ZDLFFBQVEsRUFBRSxDQUFDQSxRQUFELEVBQVdDLE1BQVgsRUFBbUJDLEdBQW5CLEVBQXdCQyxJQUF4QixFQUE4QkMsVUFBOUIsS0FBNkM7SUFDckQsTUFBTUMsTUFBTSxHQUFHLEVBQWY7SUFDQUEsTUFBTSxDQUFDSixNQUFQLEdBQWdCQSxNQUFNLElBQUksR0FBMUI7SUFDQUksTUFBTSxDQUFDSCxHQUFQLEdBQWFBLEdBQWI7SUFDQUcsTUFBTSxDQUFDRixJQUFQLEdBQWNBLElBQWQ7SUFDQUUsTUFBTSxDQUFDRCxVQUFQLEdBQW9CQSxVQUFwQjtJQUVBLE9BQU9KLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkksTUFBTSxDQUFDSixNQUF2QixFQUErQkssSUFBL0IsQ0FBb0NELE1BQXBDLENBQVA7RUFDRDtBQVRjLENBQWpCIn0=