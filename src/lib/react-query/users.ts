import { instance } from "../axios/axios";

export async function getUserAll(page: any) {
  const response = await instance.get(`/users?page=${page}&per_page=10`);
  return response.data;
}
export async function getUserById(id: any) {
  const response = await instance.get(`/users/${id}`);
  return response.data;
}
export async function addUser(data: any) {
  try {
    const response = await instance.post(`/users`, data);
    return response;
  } catch (error: any) {
    throw new Error(`${error?.response?.data[0]?.message || "error data"}`);
  }
}
export async function EditUser(data: any) {
  try {
    const response = await instance.put(`/users/${data.id}`, data);
    return response;
  } catch (error: any) {
    throw new Error(`${error?.response?.data[0]?.message || "error data"}`);
  }
}

export async function DeleteUserById(id: number) {
  try {
    await instance.delete(`/users/${id}`);
  } catch (error: any) {
    throw new Error(`${error?.response?.data[0]?.message || "error data"}`);
  }
}
