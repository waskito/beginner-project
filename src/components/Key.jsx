import React, { Component } from 'react';

export default class Key extends Component {
  render() {
    return (
      <button
        key={this.props.math}
        className={this.props.className}
        onClick={this.props.keyClick.bind(this, this.props.keyLog, this.props.math)}
      >{this.props.Tag}</button>
    );
  }
}

