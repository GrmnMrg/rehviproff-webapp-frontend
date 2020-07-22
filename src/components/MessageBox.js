import React from 'react';

class MessageBox extends React.Component {

  render() {
    return(
      <span>{this.props.msg}</span>
    );
  }

}

export default MessageBox;