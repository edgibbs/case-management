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
  render() {
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
                onChange={() => {}}
              />
              <InputComponent label="Near Zip Code" type="text" />
            </SideBar>
            <div className="col-lg-9 col-lg-offset-3 ">
              <Cards cardHeaderText="Card" />
              <Cards cardHeaderText="Card" />
              <Cards cardHeaderText="Card" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
