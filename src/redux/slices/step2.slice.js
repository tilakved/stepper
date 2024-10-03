import { current, createSlice } from "@reduxjs/toolkit";
const initialState = {
    companyFields: [],
    totalEmployees:'',
    wfhPolicy:null
    
}
const step2 = createSlice({
    name: 'step2',
    initialState: initialState,
    reducers: {
        saveDetails: (state, {payload}) => {
            console.log('payload',payload)
            const s = current(state);
            const updateValue = {
                ...s,
                companyFields: payload.companyFields,
                totalEmployees: payload.totalEmployees,
                wfhPolicy: payload.wfhPolicy,
            }
            return updateValue
        },
        resetStep2: () => initialState

    }
})

export default step2.reducer;

export const { saveDetails, resetStep2 } = step2.actions
