import React, {Component} from 'react';
import Promise from 'bluebird';

import * as utils from '../utils';
import Layout from '../Layout/';
import Article from '../../components/Article';
import SubNav from '../../components/Subnav/index';
import Sidebar from '../../components/Sidebar/index';
import IO from '@ali/kissy-io';

export function collect(nextProps, callback) {

 let pathname = nextProps.location.pathname;
  pathname = pathname.replace(/\/$/, '');

  const pathDepth = pathname.split('/');
  const collectDir = pathDepth && pathDepth[0];
  nextProps.collectDir = collectDir;

  // 获取文件夹下的所有内容
  // 以 docs 文件夹为例, markdownPromiseWithPathname 得到 2 个 promise 对象
  let markdownPromiseWithPathname = utils.collectDocs(
    nextProps.utils.get(nextProps.data, collectDir)
  );

  const promises = [Promise.all(markdownPromiseWithPathname)];

  Promise.all(promises)
    .then((mds) => {
      return callback(null, {
        markdownData: mds[0], // 把 markdown 数据挂在  markdownData 字段下
        ...nextProps
      });
    });
}


export default class Raxui extends Component {

  state = {
    makedPageData: null
  }

  static propTypes = {
    name: React.PropTypes.string,
  }

  render() {
    const props = this.props;
    const pathname = props.location.pathname.replace(/\/$/, '');
    const localizedPageData = props.markdownData.filter((page) => {
      return page.meta.filename.toLowerCase()
        .startsWith(pathname);
    })[0];

    let items;
    const pathMenu = pathname.split('/')[1];
    switch(pathMenu) {
      case 'content':
        items = contentSidebarItems;
        break;
      case 'container':
        items = containerSidebarItems;
        break;
      case 'composite':
        items = compositeSidebarItems;
        break;
    };

    return (
      <Layout>
        <SubNav items={subNavLink}/>
        <div className="main-content">
          <Sidebar items={items}/>
            <Article {...props} content={localizedPageData} />
        </div>
      </Layout>
    );
  }
}

const subNavLink = [
  { name: '内容组件', link: '/raxui/content/icon/'},
  { name: '容器组件', link: '/raxui/container/page/'},
  { name: '复合组件', link: '/raxui/composite/tabheader/'},
  { name: '业务组件', link: '/raxui/business/hello'}
];

const contentSidebarItems = [
  { name: 'Icon 图标', link: '/raxui/content/icon/'},
  { name: 'Player 视频', link: '/raxui/content/player/'},
  { name: 'Picture 图标', link: '/raxui/content/picture/'}
];

const containerSidebarItems = [
  { name: 'Page 页面容器', link: '/raxui/container/page/'},
  { name: 'Grid 列布局', link: '/raxui/container/grid/'},
  { name: 'Slider 水平轮播', link: '/raxui/container/slider/'},
  { name: 'Modal 弹窗', link: '/raxui/container/modal/'}
];

const compositeSidebarItems = [
  { name: 'Tabheader 导航切换', link: '/raxui/composite/tabheader/'},
  { name: 'Tabbar 底部导航', link: '/raxui/composite/tabbar/'},
  { name: 'Calendar 日历', link: '/raxui/composite/calendar/'},
  { name: 'Gotop 返回顶部', link: '/raxui/composite/gotop/'},
  { name: 'Countdown 倒计时', link: '/raxui/composite/countdown/'}
];
