import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

export default axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    Authorization: token
  }
});
