import './index.less';

import React, { Component, PropTypes } from 'react';

export default class Layout extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const props = this.props;

    return (
      <div className="banner">
        {props.children}
        <div className="banner-mask">
          <div className="banner-text">
            页面实现教程
          </div>
        </div>
      </div>
    );
  }
}

