const express = require('express')

const TEACHERS = require('../mock/teacher');
const res = require('express/lib/response');

const teacherRouter = express.Router();

teacherRouter.get('/', (req,res) => {
    const {from, to} = req.query
    const teacher = TEACHERS.filter((teacher) => teacher.age >= from && teacher.age <= to)
    if(teacher){
    res.send({
        msg : "Get completed !",
        data : teacher
    })
}
})

teacherRouter.get('/:id', (res,req) => {
    const findTeacher = TEACHERS[req.params.id]
    res.send(findTeacher)
})