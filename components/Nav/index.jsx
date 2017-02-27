'use strict';

import React, {Component} from 'react';
import { Link, useRouterHistory } from 'react-router';
import API from '../API/index';
import './index.less';

export default class Nav extends Component {
  state = {
    // 在此定义默认状态
  }
  static defaultProps = {
    items: [
      { name: '文档', link: '/guide', tabs: []},
      { name: '组件', link: '/component', tabs: []},
      { name: '实践', link: '/practice', tabs: []},
      { name: 'PlayGround', link: '/playground', tabs: []}
    ]
  }
  render() {
    const {items} = this.props;
    return (
      <div className="site-nav">
        <ul className="nav-wrapper">
          <li className="nav-item">
            <Link className="nav-item-link" to="/" >
              <img style={{height: '35px', width: '40px', margin: '8px 10px'}}  src="//gw.alicdn.com/tps/TB1CaHjPpXXXXbDXVXXXXXXXXXX-200-171.png" />
            </Link>
          </li>
          {
            items.map((item, index) => {
              let selectName = '';

              for (let i=0 ; i<item.tabs.length ; i++) {
                if (item.tabs[i] == API.getSelectTab().selectSub) {
                  selectName = 'selected';
                }
              }

              if (new RegExp(`^${item.link}`).test(location.pathname)) {
                selectName = 'selected';
              }

              return item.type === 'a'
                ? <a key={index} className="nav-item-link" href={item.link}>
                  <li className={'nav-item ' + selectName}>{item.name}</li>
                </a>
                : <Link key={index} className="nav-item-link" to={item.link}>
                  <li className={'nav-item ' + selectName}>{item.name}</li>
                </Link>
            })
          }
        </ul>
      </div>
    );
  }
}

