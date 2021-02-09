const Note = require("../model/Note")

exports.renderAddNote = (req, res) => {
    res.render("addnote")
}

exports.addingNote = async (request, response) => {
    let title = request.body.title;
    let content = request.body.content;
    if (title && content) {
        Note.create({
            title:title,
            content: content,
        }).then( response.redirect("/"))
            .catch(err => console.log(err))

    }
    else {
        response.send('Please enter Title and Content!');
        response.end();
    }
}

exports.renderAddNote = (request, response) => {

    let notelist;
    Note.findAll({
        where: {
            isActual: true
        },
    })
        .then( note=>{
            notelist=note;
            response.render("shownotes",{
                notes: notelist
            })
        })
        .catch(err=>console.log(err));
}