import React, { Component } from 'react';

class IframeContainer extends Component {
    render() {
        let style = {
            width: this.props.width
        }
        let url = this.props.selected_project.link;
        return (
            <div id="iframeContainer" className="container-iframe" style={style}>
                <iframe id="iframe" src={url} frameBorder="0">
                </iframe>
            </div>
        )
    }
}

export default IframeContainer;