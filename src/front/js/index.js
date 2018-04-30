/* import style */
import "../scss/style.scss";

/* import images */
let requireImages = require.context('../assets/images', true, /\.(png|jpg)$/);
requireImages.keys().forEach(requireImages);




/* import modules */
import { ReactApp } from './react-app.jsx';

/* additional scripts */

window.onload = init;

/*starter function */
function init() {
    

    let shows = new ReactApp();

}