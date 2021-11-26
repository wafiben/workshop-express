//Import express;
const midelware=require('./midelware')
const express = require("express");
//instance de la'application express
const app = express();
//port
const port = 5000;
//midelware global
app.use(express.json());
//
const users = [
  { id: 1, name: "siwar", email: "war@gmail.com" },
  { id: 2, name: "wafi", email: "wafi@gmail.com" },
  { id: 3, name: "hamza", email: "hamza@gmail.com" },
  { id: 4, name: "wassim", email: "wassim@gmail.com" },
];
// creation api-les requesst http (crud)
app.get('/users',midelware,(request,response)=>{
    response.send(users)
})
//get a specefic user from the server
app.get("/get-users/:id",midelware, (request, response) => {
    const id = request.params.id;
    const user=users.find(element=>element.id== id)
    if(user) response.send(user)
    else response.status(400).send({msg:"not found"})
  });
  //add a user to the list of users
  app.post('/get-users/add-user',(request,response)=>{
      const user = request.body;
      users.push(user);
      response.send(users)
  })
  app.put('/get-users/:id',(request,response)=>{
      const id =request.params.id;
      const updatedUser=request.body;
      users.map((element)=>{
          if(element.id==id){
              return updatedUser
          }
          else{
              return element
          }
      })
      response.send(updatedUser)
       

  })
  app.delete('/get-users/:id',(request,response)=>{
     const id=request.params.id
    const results = users.filter(element => element.id!= id);
    response.send(results); 
}) 
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`the server is running on port ${port}`);
  }
});
