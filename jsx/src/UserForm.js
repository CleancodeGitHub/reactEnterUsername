import React from 'react';
import "./App.css";

class UserForm extends React.Component {
    render() {
         return (
           <form>
               <h1><label>Enter a username:</label></h1>
               <input
                placeholder="Enter name" required />
                 <button>Go!</button>
           </form>
    );
    }
   
};
export default UserForm;