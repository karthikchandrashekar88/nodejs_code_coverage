var expect = require("chai").expect;
var revolutionaryLeader = require('../ghostInTheShell.js');

describe("Test suite for ghost in the shell",function(){
  console.log('To define test case for ghost in the shell');
  it("test case for getting revolutionary leader",function(){
    console.log('inside test case');
    var name = revolutionaryLeader.getRevolutionaryLeader();
    expect(name).to.equal("Hideo Kuze");
  });

});
