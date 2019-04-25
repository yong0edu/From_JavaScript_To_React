import React, {Component} from 'react'
import './App.css';


class Subject extends Component{
    render(){
        <h1>{this.title}</h1>
        {this.desc}
    }
}

class Yong extends Component{
    render(){
        <h2>{this.title}</h2>
        <h5>{this.desc}</h5>
    }
}

class TOC extends Component{
    render(){
        var tags = [];
        var i = 0;
        var contents = this.props.data;
        while(1<contents.length){
            tags.push(
                <li key={contents[i].id}><a href="">{contents[i].title}</a></li>
            )
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

class Content extends Component{
    render(){
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        )
    }
}


class App extends Component{
    state = {
        contents:[
            {id:1, title:'HTML', desc:'HTML is ...'},
            {id:2, title:'CSS', desc:'HTML is ...'},
            {id:3, title:'JavaScript', desc:'HTML is ...'}
        ]
    }
    render(){
        return (
            <div className="App">
                <Subject title="WEB" desc="World!!"></Subject>
                <Yong title="Yong" subtitle="Yong is a ganster"></Yong>
                <TOC data={this.state.contents}></TOC>
                <Content title="HTML" desc="HTML is ..."></Content>
            </div>
        );
    }
}