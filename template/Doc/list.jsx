import React, {Component} from 'react';
import Promise from 'bluebird';
import { Link, useRouterHistory } from 'react-router';
import * as utils from '../utils';
import Layout from '../Layout/';
import Article from '../../components/Article';
import SubNav from '../../components/Subnav/index';

export function collect(nextProps, callback) {

  let pathname = nextProps.location.pathname;
  pathname = pathname.replace(/\/$/, '');

  const pathDepth = pathname.split('/');
  const collectDir = pathDepth && pathDepth[0];

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


export default class List extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  render() {
    const props = this.props;

    return (
      <div className="doc-big-image">
        <div className="doc-big-image-bg">
          <div className="doc-big-image-g">
            <Link className="doc-listlink doc-listlink-t" to="/docs/base/getting-started"> 如何快速上手?</Link>
            <Link className="doc-listlink" to="/docs/base/getting-started"> 初识 Rax 如何快速开始？ </Link>
            <Link className="doc-listlink" to="/docs/base/component"> 我想开发组件该怎么做？ </Link>
            <Link className="doc-listlink" to="/docs/base/debug"> 项目如何快速调试？ </Link>
            <Link className="doc-listlink doc-listlink-t" to="/component/windvane"> 了解常用 API</Link>
            <Link className="doc-listlink" to="/component/windvane"> API 提供了那些能力？ </Link>
            <Link className="doc-listlink" to="/docs/components/View"> 我可以使用哪些基础标签？ </Link>
          </div>
        </div>
      </div>
    );
  }
}
