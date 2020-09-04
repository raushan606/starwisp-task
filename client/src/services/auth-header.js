export default function authHeader() {
  if (localStorage.token) {
    return { "x-auth-token": localStorage.token };
  }
}
