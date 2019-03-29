import {PureComponent} from 'react';

class SelectOption extends PureComponent {
  render() {
    return (
      <option className="option" value={this.props.selectOptions.slug}>
        {this.props.selectOptions.title}
      </option>
    );
  }
}

export default SelectOption;
