import React, {Component} from 'react';

class Yong extends Component {
    render() {
      return (
        <nav>
          <h2>{this.props.title}</h2>
          <h3>{this.props.subtitle}</h3>
          {this.props.desc}
        </nav>
      );
    }
  }
  
export default Yong;
