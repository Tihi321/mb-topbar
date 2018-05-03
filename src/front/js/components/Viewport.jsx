import React, { Component } from 'react';

class Viewport extends Component {
    render() {
        const image_url = this.props.plugin_url + "assets/front/assets/images/devices.png"
        const style = {
            backgroundImage: `url(${image_url})`
        }
        return (
            <div className="screen-wrapper">
                <button onClick={this.handleOnClick.bind(this, "100%")} id="desktop" className="btn-vieport-size desktop" title="View Desktop Version" style={style}>
                </button>
                <button onClick={this.handleOnClick.bind(this, "1024px")} id="tabletLand" className="btn-vieport-size tablet-land" title="View Tablet Landscape (1024x768)" style={style}>
                </button>
                <button onClick={this.handleOnClick.bind(this, "768px")} id="tabletPort" className="btn-vieport-size tablet-port" title="View Tablet Portrait (768x1024)" style={style}>
                </button>
                <button onClick={this.handleOnClick.bind(this, "480px")} id="mobLand" className="btn-vieport-size mob-land" title="View Mobile Landscape (480x320)" style={style}>
                </button>
                <button onClick={this.handleOnClick.bind(this, "320px")} id="mobPort" className="btn-vieport-size mob-port" title="View Mobile Portrait (320x480)" style={style}>
                </button>
            </div>
        )
    }
    handleOnClick(value){
        this.props.changeWidth(value);
    }
}

export default Viewport;