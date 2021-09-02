import { configureStore } from '@reduxjs/toolkit'
import photosReducer from './reducers/photos/photos'
import albumsReducer from './reducers/album/albums'

const store = configureStore({
    reducer : {
        photos : photosReducer,
        albums : albumsReducer,
    }
})

export default store