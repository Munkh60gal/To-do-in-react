import React from 'react';
import './App.css';
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

library.add(faTrash);

class App extends React.Component{

  // Baiguulagch funkts
  constructor(props){
    super(props); // base class

    // tuluviig todorhoiloh
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    }
    // binding, constructor iin this iig ashiglah  
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // Defining handleInput method (inputiig avah)
  handleInput(e){
    // changing state
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  // Defining addItem method (add item)
  addItem(e){
    e.preventDefault(); // button daragdhad page refreshdeh default iig arilgah
    const newItem = this.state.currentItem;
    // console.log(newItem);

    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem]; // listlegdsn itemudig tusad ni bolgoj salgah
      this.setState({
        items:newItems,
        currentItem:{
          text: "",
          key: ""
        }
      })
    }
  }

  // delete item
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  // Rendering
  render(){
    return(
      <div className = "App">

      <header>        
        <form id="todoForm" onSubmit={this.addItem} /* click hiigdeh uyd duudagdana*/ >

          <input 
          type="text" 
          placeholder = "What do you want to do ?" 
          value={this.state.currentItem.text} /* CurrentItem Input field 2iig holboh */
          onChange={this.handleInput} // handling userinpunt in realtime
          />

          <button type="submit">Add</button>

        </form>
      </header>
      <ListItems items = {this.state.items}
      deleteItem = {this.deleteItem}></ListItems>
      </div>
    );
  }

}

export default App;
