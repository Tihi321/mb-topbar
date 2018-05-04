import React, { Component } from 'react';
import { HashRouter , Switch, Route, } from 'react-router-dom';
import App from './components/App.jsx';


class Routes extends Component {
    render() {
        let routes = this.bindRoutes(this);
        return (
            <HashRouter  >
                <Switch>
                    {routes}
                </Switch>
            </HashRouter  >
        )
    }
    bindRoutes() {
        let items = [];
        if (this.props.context.wp_api.projects.length >= 1) {
            items = this.props.context.wp_api.projects.map((project, index) => {
                return (
                    <Route key={index} path={"/" + project.path} exact={true} render={
                        () => {
                            return (<App context={this.props.context} selected_project={project} />);
                        }
                    } />
                );
            });
        }
        return items;
    }
}


export default Routes;