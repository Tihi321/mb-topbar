import {Component} from 'react';
import {__} from '@wordpress/i18n';

class Logo extends Component {
  render() {
    return (
      <a
        className="logo"
        href={this.props.homeUrl}
        title={__('Homepage Link', 'mb-topbar')}>
        <img src={this.props.logoUrl} alt="logo" />
      </a>
    );
  }
}

export default Logo;
