import React, {Component} from 'react';
import Subject from './component/Subject';
import Yong from './component/Yong';
import TOC from './component/TOC';
import Content from './component/Content';




class App extends Component{
  state = {
    contents:[
      {id:1, title:'HTML', desc:'HTML is ...'},
      {id:2, title:'CSS', desc:'CSS is ...'},
      {id:3, title:'JavaScript', desc:'JS is ...'}
    ],
    subject:[
      {id:1, title:'WEB', desc:'World Wide Web!'},
    ],
    mode:'read'
  }
  render(){
    var _articleTitle, _articleDesc = '';
    if(this.state.mode === 'welcome'){
      _articleTitle = 'Welcome';
      _articleDesc = 'Hello, React!';
    } else if (this.state.mode === 'read'){
      _articleTitle = 'HTML';
      _articleDesc = 'HTML is ...';

    }
    return (
      <div className="App">
        <Subject data={this.state.subject} onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}></Subject>
        {/* <header>
          <h1><a href="/" onClick={
            function(_event){
              // this.state.mode = 'welcome';
              this.setState({mode:'welcome'});
              _event.preventDefault();
            }.bind(this)
          }>WEB</a></h1>
          World!!!
        </header> */}
        <Yong title="Yong" subtitle="Yong is a Ganster" desc="check this out mate!"></Yong>
        <TOC data={this.state.contents}></TOC>
        <Content title= {_articleTitle} desc= {_articleDesc}></Content>
      </div>
    );
    }
  }
export default App;

