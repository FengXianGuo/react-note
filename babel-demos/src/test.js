import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'

class MyComponent extends Component {
  render(){
    return (<h1>hello</h1>)
  }
}
render(<MyComponent />,document.getElementById('app'))
