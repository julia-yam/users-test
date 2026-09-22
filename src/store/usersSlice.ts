import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "../types/user";
import { getUsers } from "../api/usersApi";

export interface UsersState {
  items: User[];
  selectedUser: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: UsersState = {
  items: [],
  selectedUser: null,
  status: "idle",
  error: null,
  currentPage: 1,
  itemsPerPage: 10,
};

export const fetchUsers = createAsyncThunk<User[], void>(
  "users/fetchUsers",
  async () => {
    const users = await getUsers();
    return users;
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => { 
        state.status = "loading";
        state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Не удалось загрузить пользователей";
    });
  }
});

export default usersSlice.reducer;
