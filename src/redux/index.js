import { configureStore } from "@reduxjs/toolkit";
import step1 from "./slices/step1.slice";
import step2 from "./slices/step2.slice";
import step3 from "./slices/step3.slice";


export const store = configureStore({
    reducer: { step1, step2, step3 }
})