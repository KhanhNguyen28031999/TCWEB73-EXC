const express = require('express')

const TEACHERS = require('../mock/teacher');
const requireApiKey = require('../middlewares/requireApiKey')
const logRequestMethod = require('../middlewares/logRequestMethod')

const teacherRouter = express.Router();



// get
// teacherRouter.use(requireApiKey)
teacherRouter.get('/', (req,res) => {
    if(req.query.isAdmin === true){
    const {from, to} = req.query
    const teacher = TEACHERS.filter((teacher) => teacher.age >= from && teacher.age <= to)
    if(teacher){
    res.send({
        msg : "Get completed !",
        data : teacher
    })
}   else res.send(TEACHERS)
} else{
    res.send("Dont have permission")
}
})

teacherRouter.get('/:id', logRequestMethod, (res,req) => {
    if(req.querry.isAdmin === true){
    const findTeacher = TEACHERS.find((teacher) => teacher.id === parseInt(req.params.id));
    console.log(req.params.id)
    if (!findTeacher) {
        return res.status(404).send({ message: 'Teacher not found' });
      }
      res.send(findTeacher);
    }else{
        res.send("Dont have permission")
    }
    });


// post
teacherRouter.post('/register', (req,res) => {
    if(req.query.isAdmin === true){
    const {name, age} = req.body
    const checkExist = TEACHERS.find((teacher) => teacher.name === name)
        if(checkExist){
            res.send("Name has been taken")
            return;
        }
        else{
            const newTeacher = {
                id : TEACHERS.length + 1,
                name,
                age,
                isAdmin : false
            }
            TEACHERS.push(newTeacher)
            res.json({
                msg : "Teacher register completed",
                data : newTeacher
            })
        }
    }else{
        res.send("Dont have permission")
    }
    })

teacherRouter.post('/login', (req,res) => {
    const {name, age} = req.body;
    const checkExist = TEACHERS.find((teacher) => teacher.name === name && teacher.age === age)
        if(checkExist){
            res.send("Login successful")
        }if(!checkExist){
            res.send("Teacher not found")
        }else{
            if(TEACHERS.find((teacher) => teacher.name != name || teacher.age != age))
            {
                res.send("Wrong age or name")
            }
        }
})

    //put
    teacherRouter.put("/:id", (req, res) => {
        const teacherIndex = TEACHERS.findIndex(
          (teacher) => teacher.id === +req.params.id
        );
      
        if (teacherIndex === -1) {
          return res.json({
            message: "Resource is not existence",
          });
        }
      
        const updatedTeacher = {
          ...TEACHERS[teacherIndex],
          ...req.body,
        };
      
        TEACHERS[teacherIndex] = updatedTeacher;
      
        return res.json({
          message: "Update successfully",
          data: updatedTeacher,
        });
      });
      
      // delete
      teacherRouter.delete("/:id", (req, res) => {
        if(req.query.isAdmin === true){
        const teacherIndex = TEACHERS.findIndex(
          (teacher) => teacher.id === +req.params.id
        );
      
        if (teacherIndex === -1)
          return res.json({
            message: "Resource is not exist",
          });
      
        TEACHERS.splice(teacherIndex, 1);
      
        res.json({
          message: "Delete successfully",
        });
    }else{
        res.send("Dont have permission")
    }
      });
      
        
       
module.exports = teacherRouter;