import { createSlice } from "@reduxjs/toolkit";

type State = {
    firstName: string,
    lastName: string,
    age: number,
}


export const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: "Yasuhito",
        lastName: "Komano",
        age: 25,
    },
    reducers: {
        increment: (state: State) => {
            state.age += 1
        }
    }
})

export const {increment} = userSlice.actions;
export const userReducer = userSlice.reducer;