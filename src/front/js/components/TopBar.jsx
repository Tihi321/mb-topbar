import React, { Component } from 'react';
import Logo from './Logo.jsx';
import Menu from './Menu.jsx';
import Viewport from './Viewport.jsx';
import { FacebookShareButton, GooglePlusShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, GooglePlusIcon, LinkedinIcon, TwitterIcon } from 'react-share';

class TopBar extends Component {
    shouldComponentUpdate(){
        return false;
    }
    render() {
        const style_topbar = {
            backgroundColor: this.props.selected_project.color
        }
        return (
            <div style={style_topbar} className="top-bar">
                <Logo home_url={this.props.context.wp_api.home_url} logo_url={this.props.context.wp_api.logo_url} />
                <div className="header-text"><p>Menu</p></div>
                <Menu selected_project_path={this.props.selected_project.path} projects={this.props.context.wp_api.projects} />
                <Viewport plugin_url={this.props.context.wp_api.plugin_url} changeWidth={this.props.context.changeWidth} />
                <div className="social">
                    <FacebookShareButton url={this.props.context.wp_api.home_url} > 
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={this.props.context.wp_api.home_url}> 
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <GooglePlusShareButton url={this.props.context.wp_api.home_url}> 
                        <GooglePlusIcon size={32} round={true} />
                    </GooglePlusShareButton>
                    <LinkedinShareButton url={this.props.context.wp_api.home_url}> 
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton >
                </div>
            </div>
        )
    }
}

export default TopBar;