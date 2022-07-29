module.exports = function(app, db){
    // POST - Add new Todos 
    app.post("/addTodo", (req, res) => {
        let query = `INSERT INTO TODOS VALUES('${req.body.email}', '${req.body.todoName}', '${req.body.todoDate}', '${req.body.todoTime}', 0)`;
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send("Todo successfully added!")
        });
    });

    // GET - Get all Todos of User
    app.get("/getTodo/:email", (req, res) => {
        const d = new Date();
        const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getUTCDate()}`;
        let query = `SELECT TodoName, Status FROM TODOS WHERE Email='${req.params.email}' AND TodoDate='${date}' ORDER BY TodoTime DESC`;
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    })

    // DELETE - Delete Todo of a User
    app.delete("/deleteTodo/:email/:todoName", (req, res) => {
        let query = `DELETE FROM TODOS WHERE Email='${req.params.email}' AND TodoName='${req.params.todoName}'`;
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send("Succesfully deleted!");
        });
    });

    // PUT - To change the Status
    app.put("/checkTodo", (req, res) => {
        let query = `UPDATE TODOS SET Status='${req.body.todoStatus}' WHERE Email='${req.body.email}' AND TodoName='${req.body.todoName}'`;
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send("Succesfully updated!");
        });
    })
}

