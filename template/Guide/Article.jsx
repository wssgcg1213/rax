import React, { Component } from 'react';

export default class Article extends Component {
  static displayName = 'Article';

  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    const props = this.props;
    const content = props.content;
    return (
      <div className="article">
        <div className="markdown">
          {props.utils.toReactComponent(content.content)}
        </div>
      </div>
    );
  }
}
