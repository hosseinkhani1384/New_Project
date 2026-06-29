import {configureStore} from '@reduxjs/toolkit'
import themeslice from "./themeslice"
export const store = configureStore({
    reducer:{
        theme: themeslice
    },
})