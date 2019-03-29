import {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import SelectOption from './SelectOption.jsx';

class Menu extends PureComponent {
  bindSelectItems() {
    let items = [];
    if (this.props.projects.length >= 1) {
      items = this.props.projects.map((options, index) => {
        return <SelectOption selectOptions={options} key={index} />;
      });
    }
    return items;
  }
  render() {
    const selectItems = this.bindSelectItems();
    return (
      <select
        value={this.props.selectedProjectSlug}
        onChange={this.handleOnChange.bind(this)}
        onBlur={this.handleOnBlur}
        className="select">
        {selectItems}
      </select>
    );
  }

  handleOnChange(e) {
    this.props.history.push(e.target.value);
  }

  handleOnBlur(e) {
    console.log('on blur');
  }
}

export default withRouter(Menu);
