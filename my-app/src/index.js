import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './button';
import registerServiceWorker from './registerServiceWorker';

/*function Great(props){  
  return (
    <h1>Hello {props.phrase}! My name is {props.name}</h1>  
  )
}

function GreetAll(){
  return (
    <div>
      <Great phrase='world' name='Ivan'/>
      <Great phrase='world' name='Anna'/>
      <Great phrase='world' name='Alex'/>      
    </div>
  )
}*/

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Clock />
        <Button />
        
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
