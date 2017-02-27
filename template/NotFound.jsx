import React, {Component} from 'react';
import Layout from './Layout/index';
import NotFoundContent from '../components/NotFound';

export default class NotFound extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  }
  render() {
    return (
      <Layout>
        <div className="not-found-wrapper">
          <NotFoundContent />
        </div>
      </Layout>
    );
  }
}
