import React from 'react';
import tick from '../img/tick.png';
import cross from '../img/cross.png';
import circleRightArrow from '../img/circle-chevron-right.png';

function TicketBox({ticketInfo, isArchived}) {
    //Currently no pending image
    const imgSrc = ticketInfo.status === "Approved" ? tick : cross;

    return (
        <div class = "ticket-outer-box">
            <div class = "ticket-name">
                <h2> {ticketInfo.name} </h2>
            </div>
            <div class = "ticket-inner-box">
                <img src = {imgSrc} alt = ""></img>
                <div class = "info">
                    <h3> Status: </h3>
                    <p> {ticketInfo.status} </p>
                </div>
                <div class = "info">
                    <h3> Type: </h3>
                    <p> {ticketInfo.type} </p>
                </div>
                {isArchived &&
                    <div class = "info">
                        <h3> Reviewed by: </h3>
                        <p> {ticketInfo.reviewedBy} </p>
                    </div>
                }
                {isArchived &&
                    <div class = "feedback">
                        <h3> Feedback: </h3>
                        <p> {ticketInfo.feedback} </p>
                    </div>
                }
                <img src = {circleRightArrow} alt = ""></img>
            </div>            
        </div>
    );
}

export default TicketBox;