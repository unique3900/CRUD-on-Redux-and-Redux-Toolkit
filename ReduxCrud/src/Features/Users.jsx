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
            
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        }
    }
});

export const { insertUser,deleteUser } = userSlice.actions; 
export default userSlice.reducer;