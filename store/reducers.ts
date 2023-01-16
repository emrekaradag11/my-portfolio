import { createSlice } from "@reduxjs/toolkit";


interface stateInterfaces {
    blogList: object,
}

const initialState: stateInterfaces = {
    blogList: [
        {
            "title": "Building your audience with subscriber signups",
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "date": "20 Nisan 2022",
            "slug": "/blog/test",
            "id": 1,
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "/blog/test2",
            "id": 2,
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "/blog/test3",
            "id": 3,
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "/blog/test4",
            "id": 4,
        },
    ],
}


const states = createSlice({
    name: 'states',
    initialState,
    reducers: {
        changeLang: (state, action) => {
            //state.language = action.payload;
            //window.location.reload()
        }, 
    }
})

export const { changeLang } = states.actions

export default states.reducer