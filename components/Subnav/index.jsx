'use strict';

import React, {Component} from 'react';
import {Navigation, Menu} from '@ali/ice';
import API from '../API/index';
import './index.less';

import { Link, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default class SubNav extends Component {
  state = {
    // 在此定义默认状态
  }

  static defaultProps = {
    items: [
      { name: '入门基础', link: '/docs/base/getting-started'},
      { name: '元件', link: '/docs/component/View'},
      { name: 'API', link: '/docs/api/windvane'}
    ]
  }

  render() {
    const {items} = this.props;
    return (
      <div className="site-sub-nav">
        <ul className="sub-nav-wrapper">
          {
            items.map((item, index) => {
              let selectName = '';
              if (item.link.split('/')[2] == API.getSelectTab().selectSub) {
                selectName = 'selected'
              }
              if (item.link) {
                return <li className={'sub-nav-item ' + selectName} key={index}>
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                </li>
              } else if (item.jumpLink) {
                return <li className={'sub-nav-item ' + selectName} key={index}>
                  <Link href={item.jumpLink}>
                    {item.name}
                  </Link>
                </li>
              }
            })
          }
        </ul>
      </div>
    );
  }
}

