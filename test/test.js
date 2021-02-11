const express = require('express');
const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:3000");

describe("Create new note and read it test",function(){

    // #1 should return home page

    it("should return created note",function(done){

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

    it("should return note created earlier",function(done){

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