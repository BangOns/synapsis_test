import { instance } from "../axios/axios";

export async function getCommentByIdPosts(id: string) {
  const response = await instance.get(`/posts/${id}/comments`);
  return response.data;
}

export async function addCommentByIdPost(data: any) {
  try {
    await instance.post(`/posts/${data.id}/comments`, data);
  } catch (error) {
    throw new Error(`${error}`);
  }
}
