import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b2dcbccadff24653ac7fe31d8c6da70e",
  },
});
