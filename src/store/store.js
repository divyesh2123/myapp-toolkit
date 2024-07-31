
import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../slice/counter.slice'
import postsSlice from '../slice/postsSlice';
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from '../saga/rootsaga';
import userslice from '../slice/userslice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {

        counter: counterSlice,
        post: postsSlice,
        user: userslice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;