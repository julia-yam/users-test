import apiClient from "./apiClient";
import type { User, UserFormData } from "../types/user";

async function getUsers(): Promise<User[]> {
  const response = await apiClient.get<User[]>("/users");
  return response.data;
}

async function getUserById(id: string): Promise<User> {
  const response = await apiClient.get<User>(`/users/${id}`);
  return response.data;
}

async function createUser(data: UserFormData): Promise<User> {
  const response = await apiClient.post<User>("/users", data);
  return response.data;
}

async function updateUser(id: string, data: UserFormData): Promise<User> {
  const response = await apiClient.put<User>(`/users/${id}`, data);
  return response.data;
}

export { getUsers, getUserById, createUser, updateUser };
