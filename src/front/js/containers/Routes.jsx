import React, { Component } from 'react';
import { HashRouter , Switch, Route, } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import getProjects from '../actions/get-projects';
import changeWidth from '../actions/change-width';

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
        store.dispatch(getProjects());
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
        if (this.props.projects.length >= 1) {
            items = this.props.projects.map((project, index) => {
                return (
                    <Route key={index} path={"/" + project.path} exact={true} render={
                        () => {
                            return (<App home_url={this.props.home_url} logo_url={this.props.logo_url} plugin_url={this.props.plugin_url} projects={this.props.projects} selectedProject={project} width={this.props.width} changeWidth={this.props.onChangeWidth} />);
                        }
                    } />
                );
            });
        }
        return items;
    }
}

Routes.defaultProps = {
    home_url: "",
    logo_url: "",
    plugin_url: "",
    projects: []
};

const mapStateToProps = state => ({
    state: state.topbar.api.home_url,
    logo_url: state.topbar.api.logo_url,
    plugin_url: state.topbar.api.plugin_url,
    projects: state.topbar.api.projects,
    width: state.topbar.width
});

const mapActionsToProps = {
    onChangeWidth: changeWidth
};



export default connect(mapStateToProps, mapActionsToProps)(Routes);