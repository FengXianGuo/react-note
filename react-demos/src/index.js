import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import './index.css';
import Profile from './components/Profile'

class App extends Component{
  render(){
    const styles={
      fontSize:'28px',
      color:'red'
    }
    return (
      <Profile/>
    )
  }
}
render(<App/>,document.getElementById('app'));
