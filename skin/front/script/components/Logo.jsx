import {PureComponent} from 'react';
import {__} from '@wordpress/i18n';

class Logo extends PureComponent {
  render() {
    const logoStyle = {
      backgroundImage: `url(${this.props.logoUrl})`,
    };
    return (
      <a
        className="logo"
        href={this.props.homeUrl}
        title={__('Homepage Link', 'mb-topbar')}>
        <div className="mb-topbar-logo" style={logoStyle}></div>
      </a>
    );
  }
}

export default Logo;
