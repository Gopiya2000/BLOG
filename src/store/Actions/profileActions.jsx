import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../../api';
import { SET_PROFILE } from './authTypes';

const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}

export const viewProfile = (id) => {
    console.log("received id : ", id)
    return (dispatch) => {
        axios.get(`http://localhost:4567/api/profile/?user=${id}`)
            .then((profile) => {
                dispatch(setProfile(profile.data[0]))
                console.log("profile.data : ", profile.data[0]);
            })
            .catch(err => console.log(err))
    }
}

export const addProfile = (profile) => {
    console.log("profile", profile);

    return (dispatch, getState) => {

        axios.post(`${url}/api/profile/addProfile`, profile)
            .then(profiles => {

                dispatch({
                    type: "ADD_PROFILE",
                    blogs
                })
            }
            )
            .catch(err => {
                console.log("error", err.message)
            })
    }
}