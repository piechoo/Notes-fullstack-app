import React, { Component } from 'react'
import './Table.css';
import { Link } from "react-router-dom";

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            notenumber:null,
            sortConfig: {
                key: null,
                direction: null,
            },
            err: null,
            isLoading: false
        }
        this.onSort = this.onSort.bind(this)
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        let api_url = 'http://localhost:4006/notes';
        fetch(api_url)
            .then(res => {
                if(res.status >= 400) {
                    throw new Error("Server responds with error!");
                }
                return res.json();
            })
            .then(notes => {
                    this.setState({
                        notes,
                        isLoading: false
                    })
                    console.log(console.log(this.state.notes))
                },
                err => {
                    this.setState({
                        err,
                        isLoading: false
                    })
                });
    }

    onSort(event, sortKey){
        const notes = this.state.notes;
        if(sortKey == 'title'){
            if(this.state.sortConfig.key == sortKey && this.state.sortConfig.direction == "ascending"){
                notes.sort((a, b) => b['noteversions'][0].title.toString().localeCompare(a.noteversions[0].title.toString()))
                this.setState({sortConfig: {key: sortKey, direction: "descending"}})
            }
            else {
                notes.sort((a, b) => a['noteversions'][0].title.toString().localeCompare(b.noteversions[0].title.toString()))
                this.setState({sortConfig: {key: sortKey, direction: "ascending"}})
            }
        }

        else if( sortKey === 'modified At'){
            if(this.state.sortConfig.key == sortKey && this.state.sortConfig.direction == "ascending") {
                notes.sort((a,b) => b.noteversions[0].updatedAt.toString().localeCompare(a.noteversions[0].updatedAt.toString()))
                this.setState({sortConfig: {key: sortKey, direction: "descending"}})
            }
            else {
                notes.sort((a, b) => a.noteversions[0].updatedAt.toString().localeCompare(b.noteversions[0].updatedAt.toString()))
                this.setState({sortConfig: {key: sortKey, direction: "ascending"}})
            }
        }

        else if( sortKey === 'created At') {
            if(this.state.sortConfig.key == sortKey && this.state.sortConfig.direction == "ascending") {
                notes.sort((a, b) => b.createdAt.toString().localeCompare(a.createdAt.toString()))
                this.setState({sortConfig: {key: sortKey, direction: "descending"}})
            }
            else {
                notes.sort((a, b) => a.createdAt.toString().localeCompare(b.createdAt.toString()))
                this.setState({sortConfig: {key: sortKey, direction: "ascending"}})
            }
        }
        else {
            if(this.state.sortConfig.key == sortKey && this.state.sortConfig.direction == "ascending") {
                notes.sort((a, b) => b.NoteID.toString().localeCompare(a.NoteID.toString(), undefined, {numeric: true}))
                this.setState({sortConfig: {key: sortKey, direction: "descending"}})
            }
            else {
                notes.sort((a, b) => a.NoteID.toString().localeCompare(b.NoteID.toString(), undefined, {numeric: true}))
                this.setState({sortConfig: {key: sortKey, direction: "ascending"}})
            }
        }
        this.setState({notes})
    }


    renderTableData() {
        return this.state.notes.map((note, index) => {
            const { NoteID, isDeleted, createdAt, noteversions } = note
            let title = noteversions[0].title
            let update = noteversions[0].updatedAt
            return (
                <tr key={NoteID}>
                    <td>{NoteID}</td>
                    <td><Link to={"/content/"+NoteID} class='link'>{title}</Link></td>
                    <td>{createdAt}</td>
                    <td>{update}</td>
                </tr>
            )
        })
    }



    renderTableHeader() {
        let heder = ['ID', 'title', 'created At', 'modified At']
        return heder.map(head => {
            return <th className='unselectable' key={head} onClick={e => this.onSort(e, head)}>{head.toUpperCase()}</th>
        })
    }


    render() {
        return (
            <div class='return'>
                <h1>List of Notes</h1>
                    <table id='notes'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default Table