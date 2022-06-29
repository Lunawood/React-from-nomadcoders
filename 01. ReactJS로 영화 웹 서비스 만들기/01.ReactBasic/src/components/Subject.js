import React, { Component } from 'react';

class Subject extends Component {
    render() {    // class 안에서 function 생략가능
      return (  // Component는 하나의 최상위 tag만 써야한다!
        <header>
            <h1><a href='/'>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
      );
    }
  }

export default Subject;