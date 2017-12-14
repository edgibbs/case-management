import React from 'react';

import {
  GlobalHeader,
  PageHeader,
  Cards,
  SideBar,
  InputComponent,
  DropDownField,
} from 'react-wood-duck';

const names = [
  { value: 'Anderson, James', label: 'Anderson, James' },
  { value: 'Sally Johnson', label: 'Sally Johnson' },
  { value: 'Kelly Marisol Smith', label: 'Kelly Marisol Smith' },
  { value: 'Keith Lovely', label: 'Keith Lovely' },
];

export default class FamilyFinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: 'Anderson, James' };
    this.handleChangeDropDown = this.handleChangeDropDown.bind(this);
  }
  handleChangeDropDown(event) {
    this.setState({ selectedOption: event.value });
  }
  render() {
    const cardProps = {
      cardHeaderText: 'Card',
      cardbgcolor: 'transparent',
      columnLargeWidth: 9,
      columnMediumWidth: 9,
      offsetMediumValue: 3,
      columnXsmallWidth: 9,
      wrapContainer: '',
    };
    return (
      <div>
        <GlobalHeader />
        <PageHeader pageTitle="Find Placement Tool" button={null} />
        <div className="container">
          <div className="row">
            <SideBar>
              <DropDownField
                name="Find Placement Dropdown"
                label="Find Placement For:"
                options={names}
                onChange={this.handleChangeDropDown}
                selectedOption={this.state.selectedOption}
              />
              <InputComponent label="Near Zip Code" type="text" />
            </SideBar>
            <Cards {...cardProps} />
            <Cards {...cardProps} />
            <Cards {...cardProps} />
          </div>
        </div>
      </div>
    );
  }
}
