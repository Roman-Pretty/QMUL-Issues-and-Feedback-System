import React, { useState } from 'react';

function Archive() {
    const [ticketView, setTicketView] = useState(0)
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    
    const tickets = [
        {id: 0, name: "ECS404U - Sample Text", status: "Approved", type: "Urgent EC", reviewedBy: "Name", feedback: "Lorem ipsum"},
        {id: 1, name: "ECS404U - Sample Text", status: "Not approved", type: "Standard EC", reviewedBy: "Name", feedback: "Lorem ipsum"},
        {id: 2, name: "ECS404U - Sample Text", status: "Not approved", type: "Issue", reviewedBy: "Name", feedback: "Lorem ipsum"},
    ];

    /*
        Ticket views
        0 - All tickets
        1 - View issues
        2 - View ECs
    */
    return (
        <div id = "archive">
            <div id = "archive-views">
                <h1> Archive </h1>
                <div onClick = {() => setTicketView(0)}>
                    <h2 class = {ticketView === 0 ? "selected" : ""}> All tickets </h2>
                </div>
                <div onClick = {() => setTicketView(1)}>
                    <h2 class = {ticketView === 1 ? "selected" : ""}> View issues </h2>
                </div>
                <div onClick = {() => setTicketView(2)}>
                    <h2 class = {ticketView === 2 ? "selected" : ""}> View ECs </h2>
                </div>
            </div>
            <form id = "search-bar">
                <input placeholder = "Search" value = {searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}></input>
                <button type = "Submit"></button>
            </form>
            <div id = "ticket-boxes">
                {tickets.map(ticket => {
                    return <TicketBox ticketInfo = {ticket}></TicketBox>
                })}
            </div>
            <div id = "nav">
                <img src = "chevrons-left.png" alt = ""></img>
                <img src = "chevron-left.png" alt = ""></img>
                <p> {pageNumber} </p>
                <img src = "chevron-right.png" alt = ""></img>
                <img src = "chevrons-right.png" alt = ""></img>
            </div>
        </div>
    );
}

function TicketBox({ticketInfo}) {
    const imgSrc = ticketInfo.status === "Approved" ? "tick.png" : "cross.png";

    return (
        <div class = "ticket-box">
            <div class = "ticket-name">
                <h2> {ticketInfo.name} </h2>
            </div>
            <img src = {imgSrc} alt = ""></img>
            <div class = "info">
                <h3> Status: </h3>
                <p> {ticketInfo.status} </p>
            </div>
            <div class = "info">
                <h3> Type: </h3>
                <p> {ticketInfo.type} </p>
            </div>
            <div class = "info">
                <h3> Reviewed by: </h3>
                <p> {ticketInfo.reviewedBy} </p>
            </div>
            <div class = "feedback">
                <h3> Feedback: </h3>
                <p> {ticketInfo.feedback} </p>
            </div>
            <img src = "circle-chevron-right.png" alt = ""></img>
        </div>
    );
}

export default Archive;