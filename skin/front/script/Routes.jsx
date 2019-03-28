import {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import App from './components/App.jsx';


class Routes extends Component {
  render() {
    const routes = this.bindRoutes(this);
    return (
      <HashRouter >
        <Switch>
          {routes}
        </Switch>
      </HashRouter >
    );
  }
  bindRoutes() {
    let items = [];
    if (this.props.context.wpApi.projects.length >= 1) {
      items = this.props.context.wpApi.projects.map((project, index) => {
        const {customHomepage} = this.props.context.wpApi;

        let path = `/${project.path}`;
        if (index === 0 && customHomepage) {
          path = '/';
          project.path = '';

        }
        return (
          <Route key={index} path={path} exact={true} render={
            () => {
              return (<App context={this.props.context} selectedProject={project} />);
            }
          } />
        );
      });
    }
    return items;
  }
}


export default Routes;
