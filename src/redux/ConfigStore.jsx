import {configureStore} from '@reduxjs/toolkit' 
import LayThongTinSVReducer from './Reducer/LayThongTinSVReducer'

export const store = configureStore({
    reducer: {
        LayThongTinSVReducer: LayThongTinSVReducer
    }
})
