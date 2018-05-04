import React, {Component} from 'react';
import TopBar from './TopBar.jsx';
import IframeContainer from './IframeContainer.jsx';

class App extends Component {
    render() {
        const image_url = this.props.context.wp_api.plugin_url + "assets/front/assets/images/bg.png"
        const style = {
            background: `url(${image_url}) repeat`
        }
        return (
            <div className="react-container" style={style}>
                <TopBar context={this.props.context} selected_project={this.props.selected_project} />
                <IframeContainer width={this.props.context.wp_api.width} selected_project={this.props.selected_project} />
            </div>
        )
    }
}

export default App;