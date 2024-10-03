import { current, createSlice } from "@reduxjs/toolkit";

const initialState = {
    date: '',
    plan: '',
}
const step3 = createSlice({
    name: 'step3',
    initialState: initialState,
    reducers: {
        saveDetails: (state, {payload}) => {
            console.log('payload',payload)
            const s = current(state);
            const updateValue = {
                ...s,
                date: payload.date,
                plan: payload.plan,
            }
            return updateValue
        },
        resetStep3: () => initialState
    }
})

export default step3.reducer;

export const { saveDetails, resetStep3 } = step3.actions
