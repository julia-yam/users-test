import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/user";

export interface UsersState {
    items: User[];
    selectedUser: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    currentPage: number;
    itemsPerPage: number;
}

const initialState: UsersState = {
    items: [],
    selectedUser: null,
    status: 'idle',
    error: null,
    currentPage: 1,
    itemsPerPage: 10,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export default usersSlice.reducer;