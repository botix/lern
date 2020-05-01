const assert = require("assert");
const User = require("../src/models/userModel");


describe("Subdocuments", () =>{
  it("can create a subdocument", (done) => {
    const user = new User({ 
      name: "Jenny", 
      posts: [
        {title:"My name is Jenny"}, 
        {title:"A day in Life"}
      ]
    });
    
    user
      .save()
      .then(User.findOne({name: "Jenny"}))
      .then(res => {
        assert(res.posts[0].title === "My name is Jenny");
        assert(res.posts[1].title === "A day in Life");
        done();
      });
  });

  it("can add subdocuments to an existing record", (done) => {
    const Dylan = new User({
      name: "Dylan",
      posts: [{title: "The sixth sense"}]
    });

    Dylan
      .save()
      .then(() => User.findOne({ name: "Dylan" }))
      .then (res =>{
        res.posts.push({ title: "Last name Dog" });
        return res.save();
      })
      .then(() => User.findOne({ name: "Dylan" }))
      .then(res => {
        
        assert(res.posts.length === 2);
        assert(res.posts[1].title === "Last name Dog");
        done();
      });
  });

  it("can remove subdocuments from an existing record", (done) => {
    const Chico = new User({
      name: "Chico Felipe Cayetano Lopez Martinez y Gonzales",
      posts: [{ title: "Travelling with Digging Bill" }]
    });

    Chico
      .save()
      .then(() => User.findOne({ name: Chico.name }))
      .then(res =>{
        res.posts[0].remove();
        return res.save();
      })
      .then(() => User.findOne({ name: Chico.name}))
      .then(res => {
        assert(res.posts.length === 0);
        done();
      });
  });
  
});