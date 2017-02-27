import React, { Component } from 'react';
import Layout from '../Layout/';
import {withRouter} from 'react-router';
import '@ali/ice/global.scss';

@withRouter
export default class Playground extends Component {

  componentDidMount() {
    window.addEventListener('message', (e) => {
      const data = e.data;

      if (data.event === 'playground:change') {
        this.props.router.push(data.pathname);
      }
    })
  }

  render() {

    const uuid = this.props.routeParams ? this.props.routeParams.uuid : null;

    return (
      <Layout>
        <iframe
          id=""
          src={`http://playground.labs.taobao.net/playground/${uuid || ''}`}
          frameborder="0"
          style={{
            width: '100%',
            marginTop: '50px',
            minHeight: '650px'
          }}
        />
      </Layout>
    );
  }
}
