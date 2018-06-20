import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addNewLayout = this.addLayout.bind(this);
  }

  addLayout() {
    // Create fictional payload:
    let payload = {
      name: 'my layout',
      pictures: 12,
      medium: { charcoal: 'yes', paper: '60LBS' }
    };

    // Dispatch saga action to add new layout
    dispatch({ type: 'LAYOUT_ADD' }, payload);
  }

  renderComponents = () =>
    layouts.map((object, index) => <li key={index}>{object.property}</li>);

  render() {
    let { layouts } = this.props;

    return (
      <div>
        <h1>Layout Components</h1>
        <ul>{this.renderComponents()}</ul>
        <div>Click to execute layout saga..</div>
        <button
          onClick={() => {
            this.addLayout();
          }}
          value="Add New Layout"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  layouts: state.layouts
});

export default connect(mapStateToProps)(Layout);
