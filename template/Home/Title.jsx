import './Home.less';

import React, { Component, PropTypes } from 'react';

export default class Title extends Component {
  render() {

    const props = this.props;
    const titleClass = props.titleclass;

    return (
      <div className="title-wrap">
        <div className={'body-title ' + titleClass}>
          <div className="left-line" />
          <div className="title-item">
            {props.children}
          </div>
          <div className="right-line" />
        </div>
      </div>
    );
  }
}

