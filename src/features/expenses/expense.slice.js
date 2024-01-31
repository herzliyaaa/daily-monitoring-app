import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.API_URL;
const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: null,
}

export const fetchExpenses = createAsyncThunk(
    'expenses/fetchExpenses',
    async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    }

)

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.data.push(action.payload)
        },
        deleteExpense: (state, action) => {
            state.data = state.data.filter(expense => expense.id !== action.payload)
        },
        updateExpense: (state, action) => {
            const index = state.data.findIndex(expense => expense.id === action.payload.id);
            state.data[index] = action.payload;
        }
    },
    extraReducers: {
        [fetchExpenses.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        },
        [fetchExpenses.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.data = action.payload;
        },
        [fetchExpenses.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.error = action.error;
        }
    }
})

export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;