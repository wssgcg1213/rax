'use strict';

import React, {Component} from 'react';
import { Link, useRouterHistory } from 'react-router';
import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <div className="site-footer">
        <div className="footer-desc-content">
          <div className="github-link">
            <a href="https://github.com/alibaba/rax" target="_blank">Github</a>
          </div>
          <div className="copyright">Copyright ©️ 2017 Alibaba Inc.</div>
        </div>
      </div>
    );
  }
}
