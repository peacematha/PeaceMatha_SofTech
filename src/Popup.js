import React from "react"
import './Popup.css'

function Popup(props){
    return(props.trigger) ? (
        <div className="style_1">
        <div className="popup">
            <div className ="popup-inner">
                <button className="button-63"onClick={()=>props.setTrigger(false)}>Close Information</button>
                { props.children }
           </div>
        </div>
    </div>
    ) : "";
}

export default Popup 
