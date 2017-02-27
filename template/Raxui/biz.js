import React, {Component} from 'react';
import Promise from 'bluebird';
import { History } from 'react-router';
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

  return callback(null, nextProps);
}


export default class Raxui extends Component {

  state = {
    makedPageData: null
  }

  static propTypes = {
    name: React.PropTypes.string,
  }

  componentDidMount() {
    const props = this.props;
    const that = this;
    const pathname = props.location.pathname.replace(/\/$/, '');
    let comName = pathname.split('/')[2];

    window.addEventListener('message',function(e){
      let data = e.data;
      if (data.height) {
        document.getElementById('biz').height = data.height;
      }
      if (data.url && data.url !== location.hash) {
        that.props.history.pushState(null, '/raxui/business/mods'+data.url);
      }
    },false);

  }

  render() {
    const props = this.props;
    // 获取当前页面数据根据 meta filename 字段与 patchname 路由字段
    const pathname = props.location.pathname.replace(/\/$/, '');
    let comName = pathname.split('/')[2];

    let localhash = '';
    if (location.hash) {
      localhash = location.hash;
    }

    return (
      <Layout>
        <SubNav items={subNavLink}/>
        <div className="main-content">
          <iframe
            id="biz"
             className="main-iframe"
            src={'http://raxbiz.labs.taobao.net/list/simple/biz' + localhash}
            width="100%"
            height="450px"
          ></iframe>
        </div>
      </Layout>
    );
  }
}

const subNavLink = [
  { name: '内容组件', link: '/raxui/content/icon/'},
  { name: '容器组件', link: '/raxui/container/page/'},
  { name: '复合组件', link: '/raxui/composite/tabheader/'},
  { name: '业务组件', link: '/raxui/business/mods'}
];

