import React, { Component } from 'react';
import Logo from './Logo.jsx';
import Menu from './Menu.jsx';
import Viewport from './Viewport.jsx';
import { FacebookShareButton, GooglePlusShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, GooglePlusIcon, LinkedinIcon, TwitterIcon } from 'react-share';

class TopBar extends Component {
    render() {
        const style_topbar = {
            backgroundColor: this.props.selectedProject.color
        }
        return (
            <div style={style_topbar} className="top-bar">
                <Logo home_url={this.props.home_url} logo_url={this.props.logo_url} />
                <div className="header-text"><p>Menu</p></div>
                <Menu selectedProjectPath={this.props.selectedProject.path} projects={this.props.projects} />
                <Viewport plugin_url={this.props.plugin_url} selectedWidth={this.selectedWithInTopBar.bind(this)} />
                <div className="social">
                    <FacebookShareButton url={this.props.home_url} > 
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={this.props.home_url}> 
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <GooglePlusShareButton url={this.props.home_url}> 
                        <GooglePlusIcon size={32} round={true} />
                    </GooglePlusShareButton>
                    <LinkedinShareButton url={this.props.home_url}> 
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton >
                </div>
            </div>
        )
    }
    selectedWithInTopBar(selectedWithInTopBar) {
        this.props.selectedWithInTopBar(selectedWithInTopBar);
    }
}

export default TopBar;