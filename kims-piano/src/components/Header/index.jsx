import React from 'react';
import piano from './Piano.jpg'

function Header() {
    return(
        <article className="article">
        <img src={piano} alt="piano"/>
        <h1 className="header">Kim's Piano School</h1>
        </article>
    )
}

export default Header;