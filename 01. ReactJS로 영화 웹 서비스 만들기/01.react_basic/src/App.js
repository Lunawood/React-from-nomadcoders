import React, { Component } from 'react';
import TOC from "./components/TOC"
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';


class App extends Component { // extends 상속
  constructor(props) { // state 값 초기화
    super(props);
    this.state = {
      mode: 'read',
      subject: { title: "WEB", sub: "world wide web!" },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaSript is for interacitve' }
      ] // 데이터가 많은 경우 배열로...
    }
  }
  render() {
    console.log('App rendor');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
              title={this.state.subject.title} 
              sub={this.state.subject.sub}>
            </Subject> */}
        <header>
          <h1><a href='/' onClick={function (e) {   // 태그는 함수가 실행될때마다 reload가 된다.
            console.log(e);
            e.preventDefault();   // 태그의 기본적인 실행을 막는다.
            // this.state.mode = 'welcome';
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div >
    );
  }
}

export default App;
