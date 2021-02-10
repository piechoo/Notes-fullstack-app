const Note = require("../model/Note")
const Noteversion = require("../model/Noteversion")


exports.renderAddNote = (req, res) => {
    res.render("addnote")
}

exports.addNote = async (request, response) => {
    let title = request.body.title;
    let content = request.body.content;
    if (title && content) {
        Note.create({
        })
            .then( result => {
                Noteversion.create({
                    version: 1,
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

exports.getNotes = (request, response) => {
    if( Object.keys(request.query).length !== 0){
        Note.findAll({
            attributes: ['NoteID', 'createdAt'],
            where: {
                isDeleted: false,
                NoteID: request.query.id
            },
            include: [
                {
                    model: Noteversion,
                    limit: 1,
                    order: [
                        ['updatedAt', 'DESC'],
                    ],
                    attributes: ['title', 'updatedAt'],
                }]
        })
            .then(note => {
                if(note.length!=0)
                    response.send(JSON.stringify(note))
                else
                    response.send("Cannot find note with ID: "+request.query.id)
                response.end();
            })

    }
    else {
        let notelist;
        Note.findAll({
            attributes: ['NoteID', 'createdAt'],
            where: {
                isDeleted: false
            },
            include: [
                {
                    model: Noteversion,
                    limit: 1,
                    order: [
                        ['updatedAt', 'DESC'],
                    ],
                    attributes: ['title', 'updatedAt'],
                }]
        })
            .then(note => {
                notelist = note;
                response.send(JSON.stringify(notelist))
                response.end();
            })
            .catch(err => console.log(err));
    }
}

exports.noteContent = (request, response) => {

    if( Object.keys(request.query).length !== 0){
        Note.findAll({
            attributes: ['NoteID', 'createdAt'],
            where: {
                isDeleted: false,
                NoteID: request.query.id
            },
            include: [
                {
                    model: Noteversion,
                    limit: 1,
                    order: [
                        ['updatedAt', 'DESC'],
                    ],
                    attributes: ['title','content','updatedAt'],
                }]
        })
            .then(note => {
                if(note.length!=0)
                    response.send(JSON.stringify(note))
                else
                    response.send("Cannot find note with ID: "+request.query.id)
                response.end();
            })
    }
    else {
        response.send("Please enter note ID")
        response.end();
    }
}


exports.history = (request, response) => {
    if( Object.keys(request.query).length !== 0){
        Note.findAll({
            attributes: ['NoteID', 'isDeleted', 'createdAt'],
            where: {
                NoteID: request.query.id
            },
            include: [
                {
                    model: Noteversion,
                    order: [
                        ['updatedAt', 'DESC'],
                    ],
                    attributes: ['title', 'updatedAt'],

                }]
        })
            .then(note => {
                if(note.length!=0)
                    response.send(JSON.stringify(note))
                else
                    response.send("Cannot find note with ID: "+request.query.id)
                response.end();
            })

    }
    else {
        let notelist;
        Note.findAll({
            attributes: ['NoteID', 'isDeleted', 'createdAt'],
            where: {
            },
            include: [
                {
                    model: Noteversion,
                    order: [
                        ['updatedAt', 'DESC'],
                    ],
                    attributes: ['title', 'updatedAt'],
                }]
        })
            .then(note => {
                notelist = note;
                response.send(JSON.stringify(notelist))
                response.end();
            })
            .catch(err => console.log(err));
    }
}

exports.deleteNote = (request, response) => {
    if( Object.keys(request.query).length !== 0){

        Note.update({
            isDeleted: true
        }, {
            where: {NoteID: request.query.id},
        }).then(note => {
                if(note[1]!=0)
                    response.send(JSON.stringify(note))
                else
                    response.send("Cannot find note with ID: "+request.query.id)
                response.end();
            })
    }
    else {
        response.send("Please enter note ID")
        response.end();
    }
}

exports.updateNote = async  (request, response) => {

    if(!request.body.content) {
        return response.send("Note content can not be empty");
    }
    let prevTitle = await Noteversion.findAll({
        where: {NoteID: request.query.id},
        attributes: ['version','title'],
        order: [
            ['updatedAt', 'DESC'],
        ],
        limit: 1,
    })

    if(!request.body.title) {
        Noteversion.create({
            version: prevTitle[0].version+1,
            NoteID: request.query.id,
            title: prevTitle[0].title,
            content: request.body.content,
        })
            .then(note => {
                if (prevTitle)
                    response.send(JSON.stringify(note))
                else
                    response.send("Cannot find note with ID: " + request.query.id)
                response.end();
            })
    }
    else {
        Noteversion.create({
            version: prevTitle[0].version+1,
            NoteID: request.query.id,
            title: request.body.title,
            content: request.body.content,
        })
            .then(note => {
                if (prevTitle)
                    response.send(JSON.stringify(note))
                else
                    response.send("Cannot find note with ID: " + request.query.id)
                response.end();
            })
    }

}