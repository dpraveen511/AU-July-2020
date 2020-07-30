var express = require("express");
var app = express();
var fs = require("fs");
app.use(express.json());

//open localhost:3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
   });

//Hardcoded Lists
const lists=[
    {id: 1,value: "This is List 1"},
    {id: 2,value: "This is List 2"},
    {id: 3,value: "This is List 3 "  },
    {id: 4, value: "This is List 4"}
]

//Hardcoded New List
var newList={id: 5,value:"This is List 5" };


app.get('/', (req, res) => {
    res.send('Welcome to sample Rest API.\n\n /todoLists- (GET) to get all lists\n\n /todoList/addList- (POST) to add a new List\n\n '+
    "/todoLists/id- (GET) to get list with that id (1-4)\n"+"\n /todoLists/id- (PUT) to edit a list and set new value to that list\n"+
    "\n /todoLists/id- (DELETE) to delete the list with that id")
    });


app.get('/todoLists', function (req, res) {
     res.send(lists);
});


app.post('/todoLists/addList', (req, res)=> {
    lists.push(newList);
    res.send(newList);
});


app.get('/todoLists/:id', (req, res) => {
        const list = lists.find(c => c.id === parseInt(req.params.id));
        res.send(list);
});


app.put('/todoLists/edit/:id', (req, res) => {
    const list = lists.find(c=> c.id === parseInt(req.params.id));
    list.value = req.body.value;
    res.send(list);
}); 


app.delete('/todoLists/:id', (req, res) => {
    const list = lists.find( c=> c.id === parseInt(req.params.id));   
    const index = lists.indexOf(list);
    lists.splice(index,1);
    res.send(list);
});


     