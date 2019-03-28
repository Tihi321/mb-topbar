import { FETCH_API } from './types.js';


const loadProjectsSuccess = (state) => {
    return {
        type: FETCH_API,
        payload: state
    }
};

const getProjects = () => {
    return function (dispatch) {
        return fetch("./wp-json/mbwp-topbar/v1/api")
            .then(res => res.json())
            .then((result) => {
                    dispatch(loadProjectsSuccess(result));
                },
                // Note: it's important to handle errors here instead of a catch() block so that
                // we don't swallow exceptions from actual bugs in components.
                (error) => {
                    throw (error);
                })
    };
};

export default getProjects;