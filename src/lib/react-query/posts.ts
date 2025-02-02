import axios from "axios";
import { instance } from "../axios/axios";

export async function getPostAll(page: any) {
  const response = await instance.get(`/posts?page=${page}&per_page=10`);
  return response.data;
}
export async function getPostDetail(id: any) {
  const response = await instance.get(`/posts/${parseInt(id)}`);
  return response.data;
}
