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
            
        }
    }
});

export const { insertUser } = userSlice.actions; 
export default userSlice.reducer;