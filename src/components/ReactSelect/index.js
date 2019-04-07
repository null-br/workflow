import React, { Component } from 'react';
import Select from 'react-select';

class ReactSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ],
      defaultValue: { value: 'Default Option', label: 'default-value' },
      inputValue: null,
      selectedOption: null,
      rtl: true,
      searchable: false,
      disabled: false,
      menuIsOpen: false,
      rtl: false,
      multi: true
    }
  }
  handleChange = (selectedOption, actionMeta) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption, actionMeta);
  }
  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
    // console.log(`inputValueChange inputValue:`, inputValue);
  }
  handleMenuOpen = () => {
    this.setState({ menuIsOpen: true });
    // console.log('handleMenuOpen');
  }
  handleMenuClose = () => {
    this.setState({ menuIsOpen: false });
    // console.log('handleMenuClose');
  }
  render() {
    const {
      options,
      selectedOption,
      disabled,
      inputValue,
      menuIsOpen,
      defaultValue,
      rtl,
      multi
    } = this.state;

    return (
      <Select
        // value={selectedOption}
        options={options}
        isDisabled={disabled}
        rinputValue={inputValue}
        menuIsOpen={menuIsOpen}
        defaultInputValue="Search Text"
        defaultValue={defaultValue}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onMenuOpen={this.handleMenuOpen}
        onMenuClose={this.handleMenuClose}
        isRtl={rtl}
        isMulti={multi}
        styles={{
          control: (base) => ({ ...base, color: 'yellow' })
        }}
        // menuShouldScrollIntoView
        menuPlacement="auto"
      />
    );
  }
}

export default ReactSelect;
