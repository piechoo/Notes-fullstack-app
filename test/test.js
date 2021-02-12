const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:4006");


describe("Create new note and check if it is displayed in list ",function(){


    it("should create new note",function(done){

        server
            .post('/notes')
            .send({title : 'test title new2', content : 'test content'})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.title.should.equal('test title new2');
                res.body.content.should.equal('test content');
                done();
            });

    });

    it("should read note created earlier",function(done){

        server
            .get('/notes')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                response = res.body
                newtitle = response[response.length-1].noteversions[0].title
                newtitle.should.equal('test title new2');
                done();
            });

    });

});


describe("Create new note, delete it and check if it is deleted",function(){

    let noteid

    it("should create new note",function(done){

        server
            .post('/notes')
            .send({title : 'note to delete', content : 'should be deleted'})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                noteid = res.body.NoteID
                res.status.should.equal(200);
                res.body.title.should.equal('note to delete');
                res.body.content.should.equal('should be deleted');
                done();
            });

    });

    it("should delete note created earlier",function(done){

        server
            .delete('/notes?id='+noteid)
            .expect("Content-type",'text/html')
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });

    });

    it("should see created note as deleted",function(done){

        server
            .get('/history?id='+noteid)
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200)
                response = res.body
                isdeleted = response[0].isDeleted
                isdeleted.should.equal(true)
                done();
            });

    });

});

describe("Update last note and check if it is updated ",function(){

    let noteid

    it("should read last created note",function(done){

        server
            .get('/notes')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                response = res.body
                noteid = response[response.length-1].NoteID
                done();
            });
    });

    it("should update note read earlier",function(done){

        server
            .put('/notes?id='+noteid)
            .send({title : 'Updated', content : 'this content is updated'})
            .expect("Content-type",'json')
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.title.should.equal('Updated');
                res.body.content.should.equal('this content is updated');
                done();
            });
    });

    it("should read updated content and title from last note",function(done){

        server
            .get('/notecontent?id='+noteid)
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                response = res.body[0].noteversions[0]
                response.title.should.equal('Updated');
                response.content.should.equal('this content is updated');
                done();
            });
    });

});