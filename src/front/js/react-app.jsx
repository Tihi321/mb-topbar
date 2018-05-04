import React from 'react';
import {render} from 'react-dom';
import MyProvider, { MyContext } from './containers/context.jsx';
import Routes from './routes.jsx';

class ReactApp {

    constructor() {
        render(
            <MyProvider>
                <MyContext.Consumer>
                    {(context) => (
                        <Routes context={context}/>
                    )}
                </MyContext.Consumer>
            </MyProvider>,
            document.getElementById('react-topbar')
        );
    }

}


export{
    ReactApp
}