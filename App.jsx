import React from 'react';

class App extends React.Component {
   constructor(){
    super();
    this.state={
        data:
        [
            
        ]

        
    }
    this.setStateHandler= this.setStateHandler.bind(this);
   }

   setStateHandler(){
       var item="set state.."
       var myArray=this.state.data;
       myArray.push(item);
       this.setState({data:myArray})
   };


   render() {
      
      return (
         <div> 
          

          
           
            <button onClick={this.setStateHandler}>Add state</button>
            <h4>{this.state.data}</h4>    
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}


export default App;