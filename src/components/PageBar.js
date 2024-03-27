import React from 'react';
import doubleLeftArrow from '../img/chevrons-left.png';
import leftArrow from '../img/chevron-left.png';
import rightArrow from '../img/chevron-right.png';
import doubleRightArrow from '../img/chevrons-right.png';

function PageBar({pageNumber}) {
    //Arrows don't do anything right now
    return (
        <div class = "pagebar-nav">
            <img src = {doubleLeftArrow} alt = ""></img>
            <img src = {leftArrow} alt = ""></img>
            <p> {pageNumber} </p>
            <img src = {rightArrow} alt = ""></img>
            <img src = {doubleRightArrow} alt = ""></img>
        </div>
    );
}

export default PageBar;