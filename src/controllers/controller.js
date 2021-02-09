const Note = require("../model/Note")
const Noteversion = require("../model/Noteversion")

exports.renderAddNote = (req, res) => {
    res.render("addnote")
}

exports.addingNote = async (request, response) => {
    let title = request.body.title;
    let content = request.body.content;
    if (title && content) {

        Note.create({
        })
            .then( result => {
                console.log("nr id "+result.NoteID)
                Noteversion.create({
                    NoteID: result.NoteID,
                    title:title,
                    content:content,
                })
                    .catch(err => console.log(err))
            })
            .then( response.redirect("/"))
            .catch(err => console.log(err))






    }
    else {
        response.send('Please enter Title and Content!');
        response.end();
    }
}

exports.renderNotes = (request, response) => {

    let notelist;
    Note.findAll({
        where: {
            isDeleted: false
        },
        include: [
            {
                model: Noteversion,
            }]
    })
        .then( note=>{
            notelist=note;
            console.log(JSON.stringify(notelist))
            response.render("shownotes",{
                notes: notelist
            })
        })
        .catch(err=>console.log(err));
}