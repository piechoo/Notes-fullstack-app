const Note = require("../model/Note")
const Noteversion = require("../model/Noteversion")



exports.addNote = async (request, response) => {
    let title = request.body.title;
    let content = request.body.content;
    if (title && content) {
        if(title.length>255 || content.length>5000){
            return response.status(400).send({
                message: "Title or Content too long"
            });
        }
        Note.create({
        })
            .then( result => {
                Noteversion.create({
                    version: 1,
                    NoteID: result.NoteID,
                    title:title,
                    content:content,
                }).then( note => {response.send(note)})
                    .catch(err => console.log(err))
            })


    }
    else {
        return response.status(400).send({
            message: "Empty Title or Content "
        });
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
                        ['version', 'DESC'],
                    ],
                    attributes: ['title', 'updatedAt'],
                }]
        })
            .then(note => {
                if(note.length!=0) {
                    response.header("Access-Control-Allow-Origin", "*");
                    response.json(note);
                    response.end()
                }
                else {
                    return response.status(404).send({
                        message: "Note not found with id " + request.query.id
                    });
                }
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
                        ['version', 'DESC'],
                    ],
                    attributes: ['title', 'updatedAt'],
                }]
        })
            .then(note => {
                notelist = note;
                response.header("Access-Control-Allow-Origin", "*");
                response.json(notelist)
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
                        ['version', 'DESC'],
                    ],
                    attributes: ['title','content','updatedAt'],
                }]
        })
            .then(note => {
                if (note.length != 0){
                    response.header("Access-Control-Allow-Origin", "*");
                    response.json(note)
                    response.end();
                }
                else{
                    return response.status(404).send({
                        message: "Note not found with id " + request.query.id
                    });
                }

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
                        ['version', 'DESC'],
                    ],
                    attributes: ['version','title','content','updatedAt'],
                }]
        })
            .then(note => {
                if(note.length!=0) {
                    response.json(note);
                    response.end
                }
                else{
                    return response.status(404).send({
                        message: "Note not found with id " + request.query.id
                    });
                }
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
                        ['version', 'DESC'],
                    ],
                    attributes: ['title', 'updatedAt'],
                }]
        })
            .then(note => {
                notelist = note;
                response.json(note);
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
                if(note[1]!=0) {
                    response.send(JSON.stringify(note))
                    response.end
                }
                else{
                    return response.status(404).send({
                        message: "Note not found with id " + request.query.id
                    });
                }

            })
    }
    else {
        response.send("Please enter note ID")
        response.end();
    }
}

exports.updateNote = async  (request, response) => {
    if(!request.body.content) {
        return response.status(400).send("Empty content");
    }
    if(request.body.content.length>5000){
        return response.status(400).send({
            message: "Content too long"
        });
    }
    let prevTitle = await Noteversion.findAll({
        where: {NoteID: request.query.id},
        attributes: ['version','title'],
        order: [
            ['version', 'DESC'],
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
                if (prevTitle){
                    response.json(note)
                    response.end
                }
                else{
                    return response.status(404).send({
                        message: "Note not found with id " + request.query.id
                    });
                }
            })
    }
    else {
        if(request.body.title.length>255){
            return response.status(400).send({
                message: "Title too long"
            });
        }
        Noteversion.create({
            version: prevTitle[0].version+1,
            NoteID: request.query.id,
            title: request.body.title,
            content: request.body.content,
        })
            .then(note => {
                if (prevTitle) {
                    response.json(note)
                    response.end
                }
                else{
                    return response.status(404).send({
                        message: "Note not found with id " + request.query.id
                    });
                }
            })
    }
}