import React from "react";
import "./ListItems.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import FlipMove from "react-flip-move";

function ListItems(props){
    const items = props.items;
    const listItems = items.map(items => 
        {
            // item tus buriin div
            return(
                <div className = "list" key = {items.key}>
                    <p>
                        <input type="text" 
                        id = {items.key} 
                        value = {items.text} /* editing input txt*/
                        onChange = {
                            (e) => {
                                props.setUpdate(e.target.value, items.key)
                            }
                        }
                        />  
                        

                    <span>
                        <FontAwesomeIcon className = "faicons" 
                        icon = "trash" 
                        onClick={()=> props.deleteItem(items.key)}  // delete item
                        />
                    </span>
                    </p>
                    
                </div>
            )
        })

        return(
            <div>
            <FlipMove duration = {300} easing = "ease-in-out">
                {listItems}
            </FlipMove>    
            </div>
        )
   
}

export default ListItems;