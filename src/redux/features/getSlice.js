import { createSlice } from "@reduxjs/toolkit";

const initialState = { casayjardin: [], pintura: [] }

export const getAllSlice = createSlice({
    name: "getAll",
    initialState,
    reducers: {
        getCasaYJardinItems: (state, action) => {
            state.casayjardin = action.payload
        },
        getPinturaItems: (state, action) => {
            state.pintura = action.payload
        }
    }
})

export const { getCasaYJardinItems, getPinturaItems } = getAllSlice.actions

export default getAllSlice.reducer