import { createSlice } from "@reduxjs/toolkit";
import {UserData}  from "../Data/FakeJson";


export const userSlice = createSlice({
    name: "users",
    initialState: { value: UserData },
    reducers: {
        insertUser: (state, action) => {
            state.value.push(action.payload);
        },
        updateuser: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            })
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        }
    }
});

export const { insertUser,deleteUser,updateuser } = userSlice.actions; 
export default userSlice.reducer;