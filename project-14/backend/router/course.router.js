let express = require('express');
let router = express.Router();
let CourseController = require('../controller/course.controller.js');

router.get('/', CourseController.getMainPage);
router.get('/displayCourse', CourseController.getDisplayCoursesPage);
router.get('/addCourse', CourseController.getAddCoursePage);
router.get('/updateCourse', CourseController.getUpdateCoursePage);
router.get('/deleteCourse', CourseController.getDeleteCoursePage);
router.get('/getAllCourseDetails', CourseController.getAllCourseDetails);
router.post('/deleteCourse', CourseController.deleteCourse);
router.post('/updateCourse', CourseController.updateCourse);
router.post('/addCourse', CourseController.addCourse);

module.exports = router;