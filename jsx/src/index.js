// Import the React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from "./UserForm";


const App = () => {
    
    return (
        <div>
            <UserForm />
        </div>
        );
}

 // Tale the react component and show it on the screen
 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 );
