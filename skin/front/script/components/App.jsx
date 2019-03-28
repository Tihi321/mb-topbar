import {Component} from 'react';
import TopBar from './TopBar.jsx';
import IframeContainer from './IframeContainer.jsx';

class App extends Component {
  render() {
    const imageUrl =
      `${this.props.context.wpApi.pluginUrl}skin/public/images/bg.png`;
    const style = {
      background: `url(${imageUrl}) repeat`,
    };
    return (
      <div className="react-container" style={style}>
        <TopBar
          context={this.props.context}
          selectedProject={this.props.selectedProject}
        />
        <IframeContainer
          width={this.props.context.wpApi.width}
          selectedProject={this.props.selectedProject}
        />
      </div>
    );
  }
}

export default App;
