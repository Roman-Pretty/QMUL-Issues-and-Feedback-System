import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TicketBox from './TicketBox';
import PageBar from './PageBar';

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
            <div id = "archive-main-content">
                <SearchBar searchTerm = {searchTerm} onSearchChange = {(e) => {setSearchTerm(e.target.value);}}></SearchBar>
                <div id = "archive-ticket-boxes">
                    {tickets.map(ticket => {
                        return <TicketBox ticketInfo = {ticket} isArchived = {true}></TicketBox>
                    })}
                </div>
            </div>
            <PageBar pageNumber = {pageNumber}></PageBar>
        </div>
    );
}

export default Archive;