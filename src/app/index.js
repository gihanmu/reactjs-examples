import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
   render(){
       return(
           <div className="col-sm-6 col-sm-offset-3">
                <h1>Congrts Your app is up and running</h1>
            </div>
           
       )
   }
}

render(<App />, window.document.getElementById('app'));