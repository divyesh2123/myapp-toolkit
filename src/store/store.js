
import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../slice/counter.slice'
import postsSlice from '../slice/postsSlice';
const store = configureStore({
    reducer: {

        counter: counterSlice,
        post: postsSlice
    }
});

export default store;