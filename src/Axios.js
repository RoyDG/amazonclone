import axios from "axios";

const instance = axios.create({
  //this baseURL is for local use and should replace with live url when we deploy.
  baseURL: "http://localhost:5001/ama-clone-7/us-central1/api"
  //we couldn't get live url from firebase functions cause my payment plan spark to blaze not working. 
});

export default instance;