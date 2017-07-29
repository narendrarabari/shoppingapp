import React from 'react';

class App extends React.Component {
   render() {
       var i=1;

    var myStyle = {
         fontSize: 50,
         color: '#FF0000'
      }
      return (
         <div> 
            Hello World!!! Narendr
            {// in line Comment
            }
            {/* Multi line comment
            Best practises : 
            1. html tag should always using localcase tag name
            2. React component always start with Upper case
            3. To specify class in html tag we should use classsName & htmlFor



             */}
            <h1>Header</h1>
           
            <h2 style={myStyle}>Content</h2>
            <p data-myattribute="xyz">This is the content!!!</p>
            <h1>{i==1 ? 'True': 'False'} </h1>
            <Header/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header Text</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}


export default App;