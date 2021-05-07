import React from 'react';
import './App.css';

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

      </div>
    );
  }

}

export default App;
