import { configureStore } from '@reduxjs/toolkit'
import Auth from './AuthSlice'
import Data from './dataSlice'


const store = configureStore({
    reducer :{
        Auth,
        Data
    }
    
})

export default store  