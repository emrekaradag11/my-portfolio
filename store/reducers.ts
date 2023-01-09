import { createSlice } from "@reduxjs/toolkit";


interface stateInterfaces {
    blogList: object,
    connectElems: object,
    skillList: object,
}

const initialState: stateInterfaces = {
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
            'url': 'https://www.instagram.com/emree_karadag/',
        },
        {
            'id' : '4',
            'title': 'Twitter',
            'img': '/images/twitterWp.jpg',
            'url': 'https://twitter.com/emrekradag',
        },
    ],
    skillList : [
        {
            'id' : 1,
            'title': 'UI/UX Designer',
            'titleSm': 'UI/UX Designer',
            'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            'id' : 2,
            'title': 'Website',
            'titleSm': 'Corporate',
            'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            'id' : 3,
            'title': 'E-Commerce',
            'titleSm': 'E-Commerce',
            'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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