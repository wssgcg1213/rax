import React, {Component} from 'react';
import Promise from 'bluebird';

import * as utils from '../utils';
import Layout from '../Layout/index';
import SubNav from '../../components/Subnav/index';
import './index.less';
import { Link, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export function collect(nextProps, callback) {

  let pathname = nextProps.location.pathname;
  pathname = pathname.replace(/\/$/, '');

  const pathDepth = pathname.split('/');
  const collectDir = pathDepth && pathDepth[0];

  return callback(null, nextProps);
}

export const page = true;

export default class RaxuiList extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  render() {
    const props = this.props;
    let subNavItems = [
      { name: '内容组件', link: '/raxui/content/icon/'},
      { name: '容器组件', link: '/raxui/container/page/'},
      { name: '复合组件', link: '/raxui/composite/tabheader/'},
      { name: '业务组件', link: '/raxui/business/hello'}
    ];
    return (
      <div className="write-bg">
        <div className="raxui-list-wrapper">
          <ul className="grid cs-style-1">
            {
              uiList.map((list, index) => {
                return (
                  <li className="list-item" key={index}>
                    <figure>
                      <img src={list.image} alt="img01" />
                      <div className="listName">{list.name}</div>
                      <figcaption className="hover-wrap">
                        <h3 className="list-name">{list.name}</h3>
                        <span className="list-author">{list.author ? list.author : null}</span>
                        <Link to={list.link}>
                          Take a look
                        </Link>
                      </figcaption>
                    </figure>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

const uiList = [
  {
    name: 'Icon',
    author: '艺璇',
    image: '//gw.alicdn.com/tps/TB1XMETPpXXXXasXVXXXXXXXXXX-214-214.png',
    link: '/raxui/content/icon/'
  },
  {
    name: 'Grid',
    author: '亚城',
    image: '//gw.alicdn.com/tps/TB1c7IQPpXXXXbpXVXXXXXXXXXX-215-214.png',
    link: '/raxui/container/grid/'
  },
  {
    name: 'Countdown',
    author: '梧忌 奉雨',
    image: '//gw.alicdn.com/tps/TB1OekLPpXXXXXIaXXXXXXXXXXX-215-214.png',
    link: '/raxui/composite/countdown/'
  },
  {
    name: 'Gotop',
    author: '岭伊',
    image: '//gw.alicdn.com/tps/TB1gXIUPpXXXXauXVXXXXXXXXXX-215-214.png'
  },
  {
    name: 'Calendar',
    author: '水澜',
    image: '//gw.alicdn.com/tps/TB1FMVkPFXXXXa4XXXXXXXXXXXX-214-214.png',
    link: '/raxui/composite/calendar/'
  },
  {
    name: 'Tabbar',
    author: '水澜 玉门',
    image: '//gw.alicdn.com/tps/TB1X2tbPFXXXXawXpXXXXXXXXXX-214-214.png',
    link: '/raxui/composite/tabbar/'
  },
  {
    name: 'Tabheader',
    author: '亚城',
    image: '//gw.alicdn.com/tps/TB1BAMHPpXXXXciaXXXXXXXXXXX-214-214.png',
    link: '/raxui/composite/tabheader/'
  },
  {
    name: 'Modal',
    author: '梧忌 艺璇',
    image: '//gw.alicdn.com/tps/TB1twMHPpXXXXc6aXXXXXXXXXXX-214-214.png',
    link: '/raxui/container/modal/'
  },
  {
    name: 'Page',
    author: '亚城',
    image: '//gw.alicdn.com/tps/TB1Py4jPFXXXXcsXXXXXXXXXXXX-214-214.png',
    link: '/raxui/container/page/'
  },
  {
    name: 'Picture',
    author: '梧忌',
    image: '//gw.alicdn.com/tps/TB1To3APpXXXXafapXXXXXXXXXX-214-214.png',
    link: '/raxui/content/picture/'
  },
  {
    name: 'Player',
    author: '广骏',
    image: '//gw.alicdn.com/tps/TB1OMw6PpXXXXX6XFXXXXXXXXXX-214-214.png',
    link: '/raxui/content/player/'
  },
  {
    name: 'Slider',
    author: '艺璇',
    image: '//gw.alicdn.com/tps/TB1CMQIPpXXXXbRaXXXXXXXXXXX-214-214.png',
    link: '/raxui/container/slider/'
  }
];
