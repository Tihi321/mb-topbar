import React, {Component} from 'react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';
import {__} from '@wordpress/i18n';
import Logo from './Logo.jsx';
import Menu from './Menu.jsx';
import Viewport from './Viewport.jsx';

class TopBar extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const styleTopbar = {
      backgroundColor: this.props.selectedProject.color,
    };
    return (
      <div style={styleTopbar} className="top-bar">
        <Logo
          homeUrl={this.props.context.wpApi.homeUrl}
          logoUrl={this.props.context.wpApi.logoUrl}
        />
        <div className="header-text">
          <p>{__('Menu', 'mb-topbar')}</p>
        </div>
        <Menu
          selectedProjectPath={this.props.selectedProject.path}
          projects={this.props.context.wpApi.projects}
        />
        <Viewport
          pluginUrl={this.props.context.wpApi.pluginUrl}
          changeWidth={this.props.context.changeWidth}
        />
        <div className="social">
          <FacebookShareButton url={this.props.context.wpApi.homeUrl}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={this.props.context.wpApi.homeUrl}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <GooglePlusShareButton url={this.props.context.wpApi.homeUrl}>
            <GooglePlusIcon size={32} round={true} />
          </GooglePlusShareButton>
          <LinkedinShareButton url={this.props.context.wpApi.homeUrl}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
        </div>
      </div>
    );
  }
}

export default TopBar;
