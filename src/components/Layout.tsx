import * as React from 'react';

export default class Layout extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}