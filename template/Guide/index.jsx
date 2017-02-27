import React, {Component} from 'react';
import Promise from 'bluebird';

import * as utils from '../utils';
import Layout from '../Layout/';
import Article from './Article';
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


export default class Hello extends Component {

  state = {
    makedPageData: null
  }

  static propTypes = {
    name: React.PropTypes.string,
  }

  componentDidMount() {
  }

  render() {
    const props = this.props;
    // 获取当前页面数据根据 meta filename 字段与 patchname 路由字段
    const pathname = props.location.pathname.replace(/\/$/, '');
    const localizedPageData = props.markdownData.filter((page) => {
      return page.meta.filename.toLowerCase()
        .startsWith(pathname);
    })[0];

    let items = pageSidebarItems;

    return (
      <Layout>
        <SubNav items={subNavLink}/>
        <div className="main-content">
          <Sidebar items={items}/>
          {
            this.state.makedPageData ?
            <Article {...props} makedContent={this.state.makedPageData} /> :
            <Article {...props} content={localizedPageData} />
          }
        </div>
      </Layout>
    );
  }
}

const subNavLink = [
  { name: '页面方案', link: '/docs/guide/lista'},
];

const pageSidebarItems = [
  { name: '电梯长列表', link: '/docs/guide/lista'},
  { name: '大图横向预览', link: '/docs/guide/picture'},
  { name: '视频播放', link: '/docs/guide/player'},
  { name: 'Tab 长列表切换', link: '/docs/guide/listb'},
  { name: 'Tabbar 框架切换', link: '/docs/guide/tabbar'},
];
