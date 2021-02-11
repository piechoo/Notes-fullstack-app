import React, { Component } from 'react'
import './Table.css';
import Table from "./Table";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
            notenumber:null,
            err: null,
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        let api_url = 'http://localhost:3000/notecontent?id='+this.props.match.params.id;
        fetch(api_url)
            .then(res => {
                if(res.status >= 400) {
                    throw new Error("Server responds with error!");
                }
                return res.json();
            })
            .then(note => {
                    this.setState({
                        note,
                        isLoading: false
                    })

                },
                err => {
                    this.setState({
                        err,
                        isLoading: false
                    })
                });
    }




    renderNoteContent() {
        return this.state.note.map((note, index) => {
            const { NoteID, isDeleted, createdAt, noteversions } = note //destructuring
            let title = noteversions[0].title
            let update = noteversions[0].updatedAt
            let content = noteversions[0].content
            return (
                <div>
                <table id='notes'>
                    <tbody>

                    <tr key={NoteID}>
                        <th>{NoteID}</th>
                        <th>{title}</th>
                        <th>{createdAt}</th>
                        <th>{update}</th>
                    </tr>
                    </tbody>
                </table>
                <div id='content'>
                    <h1>{title}</h1>
                    {content}
                </div>
                </div>
            )
        })

    }






    render() {

        return (
                <div>
                    <Link to={"/"}>Back to list</Link>
                    {this.renderNoteContent()}
                </div>

        )
    }
}

export default Content