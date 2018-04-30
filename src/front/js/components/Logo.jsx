import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <a className="logo" href={this.props.home_url} title="Tihomir Selak Portfolio">
                <img src={this.props.logo_url} alt="logo"/>
            </a>
        )
    }
}

export default Logo;