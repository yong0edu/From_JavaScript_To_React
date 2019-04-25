import React, {Component} from 'react';

class Subject extends Component {
    render() {
      var con = this.props.data;
      var yong = [];
      var i = 0;
      while(i<con.length){
        yong.push(<a href="" key={con[i].id} onClick={
          function(_event){
            _event.preventDefault();
            this.props.onChangePage();
          }.bind(this)
        }>{con[i].title}</a>)
        i = i + 1;
      }
  
      return (
        <header>
          <h1>{yong}</h1>
        </header>
      );
    }
  }

  export default Subject; 