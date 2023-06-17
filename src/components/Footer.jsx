import React from 'react';

const year = new Date().getFullYear();

function Footer(){
    return (
        <footer>
            <p>copyright Slav Senkiv {year}</p>
        </footer>
    )
}

export default Footer;