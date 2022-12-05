import { createSlice } from "@reduxjs/toolkit";


interface stateInterfaces {
    language: number,
    blogList: object,
}

const initialState: stateInterfaces = {
    language: 1,
    blogList: [
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "Blog?slug=test",
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "Blog?slug=test2",
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "Blog?slug=test3",
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "Blog?slug=test4",
        },
    ]
}


const states = createSlice({
    name: 'states',
    initialState,
    reducers: {
        changeLang: (state, action) => {
            state.language = action.payload;
            //window.location.reload()
        },
        getBlogList: (state, action) => {

            return state.blogList


        },
    }
})

export const { changeLang, getBlogList } = states.actions

export default states.reducer