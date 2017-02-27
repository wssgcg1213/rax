import '../../static/style.less';

import React, { Component, PropTypes } from 'react';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';

export default class Layout extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const props = this.props;

    return (
      <div className="layout">
        <Nav />
        {props.children}
        <Footer />
      </div>
    );
  }
}

