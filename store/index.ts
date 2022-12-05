import { configureStore } from "@reduxjs/toolkit";
// bu dosya store'ları configure etmek için

import reducers from './reducers';

const store = configureStore({
    reducer : {
        reducers
    }
})

export default store;