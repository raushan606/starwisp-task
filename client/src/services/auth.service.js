import axios from "axios";

const API_URL = "http://localhost:5000/api/";

class AuthService {
  login(userId, password) {
    const data = { userId, password };
    return axios.post(API_URL + "auth", data).then((response) => {
      window.alert(response.data);
      console.log("loginservice" + response);
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      if (response.data.userId) {
        localStorage.setItem("userId", JSON.stringify(response.data.userId));
      }

      window.alert(userId);
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
      return response.data;
    });
  }

  logout() {
    console.log("logout :" + localStorage.userId);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
