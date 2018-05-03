import { CHANGE_WIDTH } from './types.js';


const changeWidth = (state) => {
    return {
        type: CHANGE_WIDTH,
        payload: state
    }
};

export default changeWidth;