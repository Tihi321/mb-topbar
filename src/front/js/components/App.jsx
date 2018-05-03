import React, {Component} from 'react';
import TopBar from './TopBar.jsx';
import IframeContainer from './IframeContainer.jsx';

class App extends Component {

    render() {
        const image_url = this.props.plugin_url + "assets/front/assets/images/bg.png"
        const style = {
            background: `url(${image_url}) repeat`
        }
        return (
            <div className="react-container" style={style}>
                <TopBar changeWidth={this.props.changeWidth} home_url={this.props.home_url} logo_url={this.props.logo_url} plugin_url={this.props.plugin_url} selectedProject={this.props.selectedProject} projects={this.props.projects} />
                <IframeContainer width={this.props.width} selectedProject={this.props.selectedProject} />
            </div>
        )
    }
}

export default App;