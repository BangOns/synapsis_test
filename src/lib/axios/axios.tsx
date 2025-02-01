import axios from "axios";

export const instance = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_API}`,
  },
});
