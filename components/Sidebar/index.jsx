'use strict';

import React, {Component} from 'react';
import {Navigation, Menu} from '@ali/ice';
import API from '../API/index';
import './index.less';

import { Link, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default class SideBar extends Component {
  state = {
    // 在此定义默认状态
  }

  render() {
    const {items} = this.props;
    return (
      <div className="site-doc-sidebar">
        <ul className="doc-sidebar-wrapper">
          {
            items.map((item, index) => {
              const link = item.link;
              let selectName = '';
              if ((link || '/').split('/')[2] == API.getSelectTab().selectSide) {
                selectName = 'selected'
              }
              if (item.group) {
                if (link) {
                  return <li key={index} className={'sidebar-group'}>
                    <Link to={link}>{item.group}</Link>
                  </li>
                } else {
                  return <li key={index} className={'sidebar-group'}>
                    {item.group}
                  </li>
                }
              } else {
                return <li key={index} className={'sidebar-item ' + selectName}>
                  <Link to={link}>
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
