import React, {Component} from 'react';

class TOC extends Component {
    render(){
      var tags = [];
      var con = this.props.data;
      var i = 0;
      while(i < con.length){
        tags.push(<li key={con[i].id}><a href="">{con[i].title}</a></li>);
        i = i + 1;
      }
  
      return (
        <nav>
          <ol>
            {tags}
          </ol>
        </nav>
      );
    }
  }

export default TOC;

