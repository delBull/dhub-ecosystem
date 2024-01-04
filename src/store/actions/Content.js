import axios from "axios";
import { useEffect } from "react";
import engContent from './content/engContent';
import espContent from './content/espContent';

// get All Blog
export const CONTENT_DATA_LOADER = "CONTENT_DATA_LOADER";
export const getContentLoader = (bool) => ({
    type: 'CONTENT_DATA_LOADER',
    payload: bool,
});


export const conntent = (bool) => {
    return async (dispatch) => {
        // let language= JSON.parse(localStorage.getItem('language'));
        // console.log('language hai ',language)
        if (!bool ) {
            // console.log('language hai ',bool)
            // console.log(typeof(language))
            dispatch(getContent(espContent))
            
        } else {
            dispatch(getContent(engContent))
        }

    };
};

//Set User Profile
export const GET_CONTENT_LOADER = "GET_CONTENT_LOADER";
export const getContent = (payload) => ({
    type: GET_CONTENT_LOADER,
    payload: payload,
});

