import {configureStore} from '@reduxjs/toolkit'
import datGheReducer from './reducer/datGheReducer'

export const store = configureStore({

    reducer:{
        datGheReducer:datGheReducer
    }











})