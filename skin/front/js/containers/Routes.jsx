import React, { Component } from 'react';
import { HashRouter , Switch, Route, } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import getProjects from '../actions/get-projects';
import changeWidth from '../actions/change-width';

class Routes extends Component {

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
                            return (<App store={this.props.store} selected_project={project} changeWidth={this.props.onChangeWidth} />);
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
    projects: state.topbar.api.projects,
    store:state.topbar
});

const mapActionsToProps = {
    onChangeWidth: changeWidth
};



export default connect(mapStateToProps, mapActionsToProps)(Routes);