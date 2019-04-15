import React from 'react';
import ReactDOM from 'react-dom';
import './custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {   
         name: 'Elmo Apple',
         color : 'red',
         img : 'red.jpg',
         img2 : 'two.jpg',
           
    },
    {   
        name: 'Spongebob Peer',
        color : 'yellow',
        img : 'yellow.jpg',
        img2 : 'three.png'   
    },
    {
        name: 'Mike Apple',
        color : 'green',
        img : 'green.jpg', 
        img2 :'four.png',  
    },
    {
        name: 'Stitch Apple',
        color : 'blue',
        img : 'blue.jpg',   
        img2 : 'one.png', 
    },
    {
        name: 'Calculator',
        color : 'purple',
    }

];

ReactDOM.render(<App items={items}/>, 
document.getElementById('root'));

serviceWorker.register();