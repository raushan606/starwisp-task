
class AuthService {
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  }

  getCurrentUser() {
    return localStorage.userId;
  }
}

export default new AuthService();
