import React, {Component} from 'react';
import TopBar from './TopBar.jsx';
import IframeContainer from './IframeContainer.jsx';

class App extends Component {

    render() {
        const image_url = this.props.store.api.plugin_url + "assets/front/assets/images/bg.png"
        const style = {
            background: `url(${image_url}) repeat`
        }
        return (
            <div className="react-container" style={style}>
                <TopBar changeWidth={this.props.changeWidth} store={this.props.store} selected_project={this.props.selected_project} />
                <IframeContainer width={this.props.store.width} selected_project={this.props.selected_project} />
            </div>
        )
    }
}

export default App;