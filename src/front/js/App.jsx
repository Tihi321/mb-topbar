import React, {Component} from 'react';
import TopBar from './components/TopBar.jsx';
import IframeContainer from './components/IframeContainer.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedWidth: undefined
        }
    }
    render() {
        const image_url = this.props.plugin_url + "assets/front/assets/images/bg.png"
        const style = {
            background: `url(${image_url}) repeat`
        }
        return (
            <div className="react-container" style={style}>
                <TopBar home_url={this.props.home_url} logo_url={this.props.logo_url} plugin_url={this.props.plugin_url} selectedProject={this.props.selectedProject} projects={this.props.projects} selectedWithInTopBar={this.selectedWithInApp.bind(this)} />
                <IframeContainer selectedWidth={this.state.selectedWidth} selectedProject={this.props.selectedProject} defaultOptions={this.props.delaultOptions} />
            </div>
        )
    }

    selectedWithInApp(selectedWithInApp) {
        this.setState({ selectedWidth: selectedWithInApp });
    }
}

// Specifies the default values for props:
App.defaultProps = {
    delaultOptions: {
        width: '100%'
    }
};

export default App;