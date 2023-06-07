import React from 'react';
import ReactDOM from 'react-dom/client';

const year = new Date().getFullYear();

function Footer(){
    return (
        <footer>
            <p>copyright Slav Senkiv {year}</p>
        </footer>
    )
}

export default Footer;