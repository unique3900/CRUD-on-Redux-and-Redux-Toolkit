import { createSlice } from "@reduxjs/toolkit";
import {UserData}  from "../Data/FakeJson";


export const userSlice = createSlice({
    name: "users",
    initialState: { value: UserData },
    reducers: {
        insertUser: (state, action) => {
            
        }
    }
});

export default userSlice.reducer;