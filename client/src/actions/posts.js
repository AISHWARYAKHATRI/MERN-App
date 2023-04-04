import { FETCH_ALL, CREATE, UPDATE, DELETE , LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js'

// Action creators are funcitons that return an action and action is just an object that has the type and a payload
// with redux thunk since we'll we be dealing with async logic we have to add this async dispatch function in front of it
// and then instead of returning the action we have to dispatch it.
// thunk allows us to specify an additional arrow function 

export const getPosts = () => async (dispatch) => {
    console.log(api.fetchPosts())
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch(error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data})
    } catch(error){
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}