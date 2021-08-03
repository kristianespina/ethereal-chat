import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const postLogin = async (email: string, password: string) => {
  return await axios.post(`${API_URL}/user/login`, { email, password });
};
