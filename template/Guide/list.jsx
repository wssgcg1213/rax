import React, {Component} from 'react';
import Promise from 'bluebird';
import { Link, useRouterHistory } from 'react-router';
import * as utils from '../utils';
import Layout from '../Layout/index';
import Banner from '../../components/Banner/index';
import './index.less';

export function collect(nextProps, callback) {

  let pathname = nextProps.location.pathname;
  pathname = pathname.replace(/\/$/, '');

  const pathDepth = pathname.split('/');
  const collectDir = pathDepth && pathDepth[0];

  return callback(null, nextProps);
}

export const page = true;

export default class Guide extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  render() {
    const props = this.props;
    return (
      <div className="write-bg">
        <div className="guide-wrapper">
          <ul className="guide-item-wrapper">
            {
              guideList.map((list, index) => {
                return (
                  <li key={index} className="guide-item J_ShowGuideBtn_0 local-demo" data-href={list.url}>
                    <Link to={list.link}>
                      <img src={list.image} />
                      <div className="guide-item-title">{list.title}</div>
                    </Link>
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


const guideList = [
  {
    title: '电梯长列表',
    link: '/docs/guide/lista',
    url: '//yacheng.alidemo.cn/demo/rax/lista.html',
    image: 'https://gw.alicdn.com/tps/TB1EO2SPXXXXXcpaXXXXXXXXXXX-221-380.png'
    // image: 'https://gw.alicdn.com/tps/TB1m9WBOVXXXXXeXFXXXXXXXXXX-220-352.png'
  },
  {
    title: '大图横向浏览',
    link: '/docs/guide/picture',
    url: '//yacheng.alidemo.cn/demo/rax/picture.html',
    image: 'https://gw.alicdn.com/tps/TB11w6WPXXXXXXhaXXXXXXXXXXX-221-380.png'
    // image: 'https://gw.alicdn.com/tps/TB1VPisOVXXXXaeXVXXXXXXXXXX-220-352.png'
  },
  {
    title: '视频播放',
    link: '/docs/guide/player',
    url: '//yacheng.alidemo.cn/demo/rax/player.html',
    image: 'https://gw.alicdn.com/tps/TB1ggj8PXXXXXciXFXXXXXXXXXX-222-380.png'
    // image: 'https://gw.alicdn.com/tps/TB1TKaNOVXXXXXVXXXXXXXXXXXX-220-352.png'
  },
  {
    title: 'Tab 长列表切换',
    link: '/docs/guide/listb',
    url: '//yacheng.alidemo.cn/demo/rax/listb.html',
    image: 'https://gw.alicdn.com/tps/TB16O2GPXXXXXaIapXXXXXXXXXX-221-380.png'
    // image: 'https://gw.alicdn.com/tps/TB1NtSsOVXXXXaXXVXXXXXXXXXX-220-352.png'
  }
];
