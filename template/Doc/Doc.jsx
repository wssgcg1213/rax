import React, {Component} from 'react';
import * as utils from '../utils';
import Layout from '../Layout/';
import Article from '../../components/Article';
import Sidebar from '../../components/Sidebar/index';
import NotFound from '../../components/NotFound';
import IO from '@ali/kissy-io';

export async function collector(nextProps) {
  return {};
}

export default class Doc extends Component {
  state = {
    makedPageData: null
  }

  static propTypes = {
    name: React.PropTypes.string,
  }

  render() {
    const language = 'zh-Hans'; // @TODO: il18n
    const props = this.props;
    let content = null;
    try {
      const md = props.data[language]['guide'][props.routeParams['guide']];
      if (!md) {
        throw new Error(props.routeParams['guide'], 'md not found');
      }
      content = <Article {...props} content={md} />;
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

const navigationItems = [
  { group: '基础' },
  { name: '快速开始', link: '/guide/getting-started'},
  { name: 'HelloWorld', link: '/guide/hello-world'},
  { name: '学习 JSX', link: '/guide/learn-jsx'},
  { name: '核心概念', link: '/guide/core-concept'},
  { name: '开发组件', link: '/guide/component'},
  { name: '事件处理', link: '/guide/event-handle'},
  { name: 'Flexbox 和样式', link: '/guide/style'},
  { name: '网络请求', link: '/guide/network'},
  { name: '嵌套层级', link: '/guide/layer'},

  { group: '进阶' },
  { name: '容器能力差异', link: '/guide/container-diff'},
  { name: '降级方案', link: '/guide/downgrade'},
  { name: '单元测试', link: '/guide/tests'},

  { group: 'API 参考', link: '/guide/api' },

  { group: '更多' },
  { name: '从 React 迁移', link: '/guide/compare-react'},
  { name: 'FAQ', link: '/guide/faq'}
];

Doc.collector = collector;
