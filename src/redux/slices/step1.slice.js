import { current, createSlice } from "@reduxjs/toolkit";
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companyWebsite: '',
    state: '',
    zipCode: '',
}
const step1 = createSlice({
    name: 'step1',
    initialState: initialState,
    reducers: {
        saveDetails: (state, {payload}) => {
            console.log('payload',payload)
            const s = current(state);
            const updateValue = {
                ...s,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                companyName: payload.companyName,
                companyWebsite: payload.companyWebsite,
                state: payload.state,
                zipCode: payload.zipCode
            }
            return updateValue
        },
        resetStep1: () => initialState

    }
})

export default step1.reducer;

export const { saveDetails, resetStep1 } = step1.actions
