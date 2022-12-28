import React from 'react';
import {useDispatch} from "react-redux";
import {setStatus} from "../../store/UserSlice";
import {useParams} from "react-router-dom";

export const NotFound = () => {
    const dispatch = useDispatch()
    dispatch(setStatus(null))

    return (
        <div>
            <h1>404</h1>
        </div>
    );
};
