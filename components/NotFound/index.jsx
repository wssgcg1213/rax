/**
 * Created at 2017/2/24.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, {Component, PropTypes} from 'react';
import './index.less';
export default class extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="not-found-content">
        <img className="not-found-image"
             src="//zos.alipayobjects.com/rmsportal/aiZBMWZKgKIeSFBPLGkm.jpg" />
        <div className="fond-text">客官您稍后，小二在救火~</div>
      </div>
    );
  }
}
