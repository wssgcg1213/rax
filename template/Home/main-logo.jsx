'use strict';

import React, {Component} from 'react';
import './Home.less';
import Vivus from 'vivus';

export default class MainLogo extends Component {
  state = {
    // 在此定义默认状态
  }
  componentDidMount() {
    const logo = new Vivus('rx-logo', {
      type: 'async',
      duration: 120,
    });
    logo.play();
  }

  render() {
    return (
      <div className="site-main-logo">
        <div className="deco" aria-hidden="true"></div>
        <div className="logo" aria-hidden="true">
          <svg id="rx-logo" width="502px" height="500px" viewBox="0 0 502 500">
            <path d="M1.921875,1.74918424 L124.246094,126.431507 L325.703125,124.945093 C325.703125,124.945093 370.699219,128.423852 370.699219,183.746706 C370.699219,239.069559 332.53125,243.050326 332.53125,243.050326 L249.359375,245.281909 L363.339844,364.446066 C363.339844,364.446066 499.003906,333.666698 499.003906,184.213416 C499.003906,34.7601343 344.476562,0.451022841 344.476562,0.451022841 L1.921875,1.74918424 Z"></path>
            <polygon points="0.733326549 246.301613 175.226563 246.301613 423.578125 496.136891 247.136719 499.564665"></polygon>
          </svg>
        </div>

        <div className="site-btns">
          <a className="button" href="https://github.com/alibaba/rax/tree/master/docs">Get Started</a>
          <a className="button" href="#examples">Examples</a>
        </div>
      </div>
    );
  }
}

