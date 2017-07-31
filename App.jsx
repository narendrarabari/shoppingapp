import React from 'react';

import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
                "id" :1,
                "productcode":"LN332",
                "name" : "Isla Bra",
                "price" : "29"
            },
				
            {
                "id" :2,
                "productcode":"LN336",
                "name" : "NordicRoseBra",
                "price" : "30"
            },
				
            {
                "id":3,
                "productcode":"FY240",
                "name" : "Zentangle Bra",
                "price" : "34"
            },
            {
                
                "id":4,
                "productcode":"PN112",
                "name" : "Clara Bra",
                "price" : "32"
            
            },
            {    
                "id":5,
                "productcode":"FY158",
                "name" : "Deco Delight Bra",
                "price" : "34"
            },
            {
                "id":6,
                "productcode":"LN328",
                "name" : "Sienna Bra",
                "price" : "32"                
            }
         ]
      }
    this.addProduct=this.addProduct.bind(this);
    this.removeProduct=this.removeProduct.bind(this);
   };
   addProduct(){
       
       console.log("product added");
        {/*console.log(ReactDOM.findDOMNode(this.refs.productid).value);*/}
   }
   removeProduct(){
    console.log("remove product is called");
    console.log("leng"+this.state.data.length);
    var dataafterslice=this.state.data.slice(1);
    this.setState({data:dataafterslice})
    this.state.data.length==0?alert("Empty data"):this.state.data.slice(this.state.data.length-1,this.state.data.length);
   } 
	
   render() {
      return (
         <div>
            <Header/>
            
            <table>
               <tbody>
                   <TableHeader/>
                  {this.state.data.map((product, i) => <TableRow key = {i} data = {product} />)}
               </tbody>
            </table>
            <button onClick = {this.addProduct()}>add product</button>
             <button onClick = {this.removeProduct}>delete product</button>
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

class TableHeader extends React.Component{
    render(){

        return(

            <tr>
                <th>Sr</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Product Price</th>
            </tr>
        );

    }

}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.productcode}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.price}</td>
         </tr>
      );
   }
}

export default App;