import React from 'react';

class App extends React.Component {
   constructor(){
    super();
    this.state={
        data:
        [
            { 
                "id":1,
                "name":"Bhavin",
                "age":"30"

            },
            {
                "id":2,
                "name":"Tejas",
                "age":"25"
            },
            {
                "id":3,
                "name":"Vishal",
                "age":"32"
            }

        ]

        
    }
   }
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
            <Header/>
            <table>
                <tbody>
                    {this.state.data.map((person,i)=><TableRow key={i} data={person}/>)}
                </tbody>
            </table>
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
class TableRow extends React.Component{

    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );

    }
}

export default App;