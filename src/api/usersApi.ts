import apiClient from "./apiClient";
import type { User } from '../types/user'

async function getUsers(): Promise<User[]> {
  const response = await apiClient.get<User[]>("/users");
  return response.data;
}

export { getUsers };