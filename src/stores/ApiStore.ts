export default class ApiStore {
  getToken() {
    var token = sessionStorage.getItem("token");
    console.log(token);
    return token;
  }
}
