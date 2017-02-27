/**
 * Created at 2017/2/27.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component, PropTypes } from 'react';

export default class extends Component {
  componentWillMount() {
    this.props.router.replace('/guide/getting-started');
  }
  render() {
    return (
      <div>redirecting</div>
    );
  }
}
