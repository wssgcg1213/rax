/**
 * Created at 2017/2/24.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, {Component, PropTypes} from 'react';
import * as utils from '../utils';
import Layout from '../Layout/';
import Article from '../../components/Article';
import Sidebar from '../../components/Sidebar/index';
import NotFound from '../../components/NotFound';
import './Component.less';

export function collect(nextProps, callback) {
  console.log(nextProps.data, nextProps);
  let pathname = nextProps.location.pathname; // /guide/install
  pathname = pathname.replace(/\/$/, '');
  const pathDepth = pathname.split('/');
  const collectDir = pathDepth && pathDepth[0];
  nextProps.collectDir = collectDir;

  // 获取文件夹下的所有内容
  // 以 docs 文件夹为例, markdownPromiseWithPathname 得到 2 个 promise 对象
  let markdownPromiseWithPathname = utils.collectDocs(
    nextProps.utils.get(nextProps.data.docs, collectDir)
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

export default class Comp extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const props = this.props;
    const pathname = 'docs/' + props.location.pathname.replace(/\/$/, '');

    let content = null;
    try {
      // 获取当前页面数据根据 meta filename 字段与 patchname 路由字段
      const localizedPageData = props.markdownData.filter((page) => {
        return page.meta.filename === (pathname + '.md') || page.meta.filename === (pathname + '/README.md');
      })[0];
      if (!localizedPageData) {
        throw new Error('no localizedPageData loaded');
      }
      content = <Article {...props} content={localizedPageData} />;
    } catch (err) {
      content = (
        <div className="article">
          <div className="markdown">
            <div style={{ textAlign: 'center'}}><NotFound /></div>
          </div>
        </div>
      );
    }

    return (
      <Layout>
        <div className="main-content">
          <Sidebar items={navigationItems}/>
          { content }
        </div>
      </Layout>
    );
  }
}

Component.collect = collect;

const navigationItems = [
  { name: 'Windvane 手淘API', link: '/component/windvane'},
  { name: 'Mtop 请求', link: '/component/mtop'},
  { name: 'JSONP 请求', link: '/component/jsonp'},
  { name: 'User 用户信息', link: '/component/user'},
  { name: 'Stylesheet 样式', link: '/component/stylesheet'},
  { name: 'Spm 埋点', link: '/component/spm'},
  { name: 'Goldlog 埋点', link: '/component/goldlog'},
  { name: 'Asyncstorage 本地数据', link: '/component/asyncstorage'},
  { name: 'Panresponder 手势', link: '/component/panresponder'},
  { name: 'Toast 弹框', link: '/component/toast'},
  { name: 'Dimensions 屏幕信息', link: '/component/dimensions'},
  { name: 'Env 环境判断', link: '/component/env'},
  { name: 'Platform 环境信息', link: '/component/platform'},
  { name: 'Share 手淘分享', link: '/component/share'},
  { name: 'Tracker 错误监控', link: '/component/tracker'},
  { name: 'Transition 过渡动画', link: '/component/transition'},
  { name: 'View 容器', link: '/component/View'},
  { name: 'Text 文本', link: '/component/Text'},
  { name: 'Image 图片', link: '/component/Image'},
  { name: 'TextInput 输入框', link: '/component/TextInput'},
  { name: 'Link 链接', link: '/component/Link'},
  { name: 'Button 按钮', link: '/component/Button'},
  { name: 'ScrollView 滚动容器', link: '/component/ScrollView'},
  { name: 'RecyclerView 容器', link: '/component/RecyclerView'},
  { name: 'ListView 列表容器', link: '/component/ListView'},
  { name: 'TouchableHighlight 点击容器', link: '/component/TouchableHighlight'},
  { name: 'Switch 开关', link: '/component/Switch'},
  { name: 'Video 视频', link: '/component/Video'}
];
