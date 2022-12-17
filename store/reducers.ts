import { createSlice } from "@reduxjs/toolkit";


interface stateInterfaces {
    language: number,
    blogList: object,
    connectElems: object,
}

const initialState: stateInterfaces = {
    language: 1,
    blogList: [
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "Blog/test",
            "id": "1",
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "Blog/test2",
            "id": "2",
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "Blog/test3",
            "id": "3",
        },
        {
            "title": "Lorem Title",
            "desc": "Lorem Desc",
            "date": "20 Nisan 2022",
            "slug": "Blog/test4",
            "id": "4",
        },
    ],
    connectElems : [
        {
            'id' : '1',
            'title': 'Github',
            'img': '/images/githubWp.png',
            'url': 'https://github.com/emrekaradag11',
        },
        {
            'id' : '2',
            'title': 'Linked-in',
            'img': '/images/linkedinWp.jpg',
            'url': 'https://www.linkedin.com/in/emrekaradag/',
        },
        {
            'id' : '3',
            'title': 'Instagram',
            'img': '/images/instagramWp.jpg',
            'url': '#',
        },
        {
            'id' : '4',
            'title': 'Twitter',
            'img': '/images/twitterWp.jpg',
            'url': '#',
        },
    ],
}


const states = createSlice({
    name: 'states',
    initialState,
    reducers: {
        changeLang: (state, action) => {
            state.language = action.payload;
            //window.location.reload()
        }, 
    }
})

export const { changeLang } = states.actions

export default states.reducer