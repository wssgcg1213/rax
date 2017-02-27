'use strict';

import React, {Component} from 'react';
import Layout from '../Layout/';
import Banner from './Banner';
import Title from './Title';
import Guide from '../Guide/list';
import RaxUI from '../Raxui/list';
import { products } from './data';

import '@ali/ice/global.scss';

export function collect(nextProps, callback) {
  let pathname = nextProps.location.pathname;
  pathname = pathname.replace(/\/$/, '');
  const pathDepth = pathname.split('/');
  const collectDir = pathDepth && pathDepth[0];
  return callback(null, nextProps);
}

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Banner />

        <div className="info">
          <div className="info-part1">
          </div>
          <div className="info-part2">
            <div className="info-part2-item">
              <div className="info-part2-title">
                高性能
              </div>
              <div className="info-part2-text">
                blazing fast virtual DOM
              </div>
            </div>
            <div className="info-part2-item">
              <div className="info-part2-title">
                超轻量
              </div>
              <div className="info-part2-text">
                8.0 KB minified + gzipped
              </div>
            </div>
            <div className="info-part2-item">
              <div className="info-part2-title">
                跨容器
              </div>
              <div className="info-part2-text">
                works in browsers, Weex, and Node.js
              </div>
            </div>
          </div>
        </div>

        <Title>教程</Title>
        <Guide />
        <Title titleclass={'body-title-raxui'}>RAXUI</Title>
        <RaxUI />

        <div className="user-container">
          <div className="user-wrap">
            <h2>哪些产品在用 RAX ？</h2>
            <ul className="user-group">
              {products.map((product, index) => {
                return (
                  <li key={index} className="user-item">
                    <img src={product.image} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

