import React, { Component } from 'react';
import { HashRouter , Switch, Route, } from 'react-router-dom';
import App from './App.jsx';


class Routes extends Component {
    constructor() {
        super();
        this.state = {
            home_url: "",
            logo_url: "",
            plugin_url:"",
            projects: []
        }
    }

    componentDidMount() {
        fetch("./wp-json/mbwp-topbar/v1/api")
            .then(res => res.json())
            .then((result) => {
                this.setState({ is_loaded: true, projects: result.projects, logo_url: result.logo_url, plugin_url: result.plugin_url, home_url:result.home_url  });
            },
                // Note: it's important to handle errors here instead of a catch() block so that
                // we don't swallow exceptions from actual bugs in components.
                (error) => {
                    this.setState({ is_loaded: true, error });
                })
    }



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
        if (this.state.projects.length >= 1) {
            items = this.state.projects.map((project, index) => {
                return (
                    <Route key={index} path={"/" + project.path} exact={true} render={
                        () => {
                            return (<App home_url={this.state.home_url} logo_url={this.state.logo_url} plugin_url={this.state.plugin_url} projects={this.state.projects} selectedProject={project} />);
                        }
                    } />
                );
            });
        }
        return items;
    }
}


export default Routes;