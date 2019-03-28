import {Component} from 'react';

class Logo extends Component {
  render() {
    return (
      <a
        className="logo"
        href={this.props.homeUrl}
        title="Tihomir Selak Portfolio">
        <img src={this.props.logoUrl} alt="logo" />
      </a>
    );
  }
}

export default Logo;
