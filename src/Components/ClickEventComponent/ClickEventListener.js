import React from 'react';
import './ClickEventListener.css';

function ClickEventListener() {
    // This is the SAME event listener as in the DOM example
    const eventListener = (event) => {
        const id = event.target.id;
        const type = event.target.type;
        const className = event.target.className;
        const text = event.target.innerText;
        alert(`Button "${id}" of type "${type}" and class "${className}" contains "${text}"`);
        event.target.id = 'bouton'
    };

    const mouseEnteredButton = (event) =>{
        const id = event.target.id;
        const type = event.target.type;
        const className = event.target.className;
        const text = event.target.innerText;
        console.log(`ENTERED Button "${id}" of type "${type}" and class "${className}" contains "${text}"`);
    };

    const mouseLeftButton = (event) =>{
        const id = event.target.id;
        const type = event.target.type;
        const className = event.target.className;
        const text = event.target.innerText;
        console.log(`LEFT Button "${id}" of type "${type}" and class "${className}" contains "${text}"`);
    };

    return (
            <button
        id="btn1"
        type="button"
        className="btn"
        onClick={eventListener}
        onMouseEnter={mouseEnteredButton}
        onMouseLeave={mouseLeftButton} 
            >
            Click me
        </button>
    );
}

export default ClickEventListener;