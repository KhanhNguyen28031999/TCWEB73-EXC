const express = require('express')

const TEACHERS = require('../mock/teacher');
const requireApiKey = require('../middlewares/requireApiKey')
const logRequestMethod = require('../middlewares/logRequestMethod')

const teacherRouter = express.Router();

teacherRouter.use(requireApiKey)

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

teacherRouter.get('/:id', logRequestMethod, (res,req) => {
    const findTeacher = TEACHERS[req.params.id]
    res.send(findTeacher)
})