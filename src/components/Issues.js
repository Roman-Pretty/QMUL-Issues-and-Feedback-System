import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TicketBox from './TicketBox';
import PageBar from './PageBar';

function Issues() {
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    const tickets = [
        {id: 0, name: "ECS404U - Sample Text", status: "Pending", type: "Issue"},
        {id: 1, name: "ECS404U - Sample Text", status: "Pending", type: "Issue"},
        {id: 2, name: "ECS404U - Sample Text", status: "Pending", type: "Issue"},
    ];

    return (
        <div id = "issues">
            <div id = "issues-side-bar">
                <h1> Issues </h1>
            </div>
            <div id = "issues-main">
                <div id = "issues-main-content">
                    <SearchBar searchTerm = {searchTerm} onSearchChange = {(e) => {setSearchTerm(e.target.value);}}></SearchBar>
                    <div id = "issues-ticket-boxes">
                        {tickets.map(ticket => {
                            return <TicketBox ticketInfo = {ticket} isArchived = {false}></TicketBox>
                        })}
                    </div>
                </div>
                <PageBar pageNumber = {pageNumber}></PageBar>
            </div>
        </div>
    );
}

export default Issues;