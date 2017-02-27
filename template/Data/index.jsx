import React, {Component} from 'react';
import {Table, Tab} from '@ali/ice';
import {ajax} from '@ali/ice-bind';
import Layout from '../Layout/';
import SubNav from '../../components/Subnav/index';
import Sidebar from '../../components/Sidebar/index';

require('./index.less');
const {TabPane} = Tab;
const HOST = 'http://rax.alibaba-inc.com';

export default class Data extends Component {
  state = {
    data: []
  };
  cellRender = (value, index, record, context) => {
    return value + this.state.extra;
  };
  constructor(props) {
    super(props);
  }
  changeTab(key) {
    let type = 'info';
    let query = '';

    switch (key) {
      case '1':
        query = '?category=base';
      case '2':
        query = '?category=api';
        break;
      case '3':
        query = '?category=content';
        break;
      case '8':
        query = '?category=other';
        break;
      case '9':
        type = 'diff';
        break;
    }
    this.setState({
      selectedTab: key,
      data: []
    });
    this.getData(type, query);
  }

  componentDidMount(){
    const props = this.props;
    const pathname = props.location.pathname.replace(/\/$/, '');
    const category = pathname.match(/data\/?(.*)/)[1];

    this.getData('info', `?category=${category || 'base'}`);
  }

  onSort(dataIndex, order, sort) {
    let data = this.state.data.sort((a, b) => {
      let result = a[dataIndex] - b[dataIndex];
      return (order == 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
    });
    this.setState({
      data
    });
  }

  render() {
    const {selectedTab} = this.state;
    const subNavItems = [
      { name: '基础组件', link: '/data/base'},
      { name: 'API使用', link: '/data/api'},
      { name: '内容组件', link: '/data/content'},
      { name: '其他组件', link: '/data/other'},
      { name: '本周更新', link: '/data/update'},
    ];

    return (
      <Layout>
        <SubNav items={subNavItems} />
        <Table dataSource={this.state.data} optimization={false} fixedHeader={true} onSort={this.onSort.bind(this)}>
          <Table.Column title="包名" dataIndex="name" cell={(name) => {
            return <a href={`http://gitlab.alibaba-inc.com/kg/${name}`} target="_blank">{name}</a>;
          }}/>
          <Table.Column title="作者" dataIndex="author"/>
          <Table.Column title="最新版本" dataIndex="version"/>
          <Table.Column title="今日下载" dataIndex="todayDownloads" sortable/>
          <Table.Column title="30天内下载" dataIndex="monthDownloads" sortable/>
          <Table.Column title="依赖个数" dataIndex="dependencies" sortable/>
          <Table.Column title="被依赖个数" dataIndex="beDependencies" sortable/>
          {
            selectedTab === '9' && <Table.Column title="版本变更" dataIndex="versionChange"/>
          }
        </Table>
      </Layout>
    );
  }
  getData(type, query = '?category=base') {
    ajax({
      url: `${HOST}/api/data/component/${type + query}`,
      needToken: false,
      crossDomain: true,
      method: 'GET'
    }, (err, res) => {
      if (type === 'diff') {
        res.forEach((data) => {
          data.versionChange = `${data.preData ? (data.preData.version || 'null') : 'null'} -> ${data.version}`;
        });
      }
      this.setState({
        data: res
      });
    });
  }
}
