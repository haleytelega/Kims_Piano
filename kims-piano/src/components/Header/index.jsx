import React from 'react';
import piano from './Piano.jpg'

function Header() {
    return(
        <article className="header_article">
        <img src={piano} alt="piano"/>
        <h1 className="kim_name">Kim's Piano School</h1>
        <p className="kim_job">Piano Teacher</p>
        </article>
    )
}

export default Header;