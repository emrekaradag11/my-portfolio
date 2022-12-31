import { createSlice } from "@reduxjs/toolkit";


interface stateInterfaces {
    language: number,
    blogList: object,
    connectElems: object,
    workList: object,
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
            'url': 'https://www.instagram.com/emree_karadag/',
        },
        {
            'id' : '4',
            'title': 'Twitter',
            'img': '/images/twitterWp.jpg',
            'url': 'https://twitter.com/emrekradag',
        },
    ],
    workList : [
        {
            'id' : '1',
            'title': 'UI/UX Designer',
            'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            'id' : '2',
            'title': 'Website',
            'desc' : 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.'
        },
        {
            'id' : '3',
            'title': 'E-Commerce',
            'desc' : 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.'
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