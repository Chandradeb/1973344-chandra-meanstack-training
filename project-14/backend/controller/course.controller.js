let CourseModel=require('../model/course.model.js')

let getAllCourseDetails = async (req, res) => {
    let courseArr = [];
    await CourseModel.find({}, (error, result) => {
      if (!error) {
        courseArr = result;
        courseArr.sort(function (first, second) {
          return first._id - second._id;
        });

        let tableData = `<table border = "1"> 
                  <tr>
                    <th>Course Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>`;
  
        courseArr.forEach((courses) => {
          tableData += `
                  <tr>
                      <td>${courses._id}</td>
                      <td>${courses.courseName}</td>
                      <td>${courses.courseDesc}</td>
                      <td>${courses.price}</td>
                  </tr>`;
        });
  
        tableData += `</table>`;

        const buttonHTML = `
              <div>
                  <a href="../">Go Back</a>
              </div>`;
        res.send(tableData + buttonHTML);
      }else {
        console.log(error);
      }
    });
  };



let addCourse = (req,res)=>{
    let course = new CourseModel({
        _id: req.body.courseID,
        courseName: req.body.name,
        courseDesc: req.body.description,
        price: req.body.price,
    });
    course.save((error,result)=>{
        if(!error){
            console.log("Record inserted successfully!");
            res.status(204).send();
        }else{
            console.log(error.message);
            res.status(204).send();
        }
    });
};

let deleteCourse = (req, res) => {
    CourseModel.deleteOne({ _id: parseInt(req.body.courseID) }, (error, result) => {
      if (!error) {
        console.log('Record deleted successfully!');
        res.status(204).send();
      } else {
        console.log(error.message);
        res.status(204).send();
      }
    });
};

let updateCourse = (req, res) => {
    CourseModel.updateOne(
      {_id: req.body.courseID },
      {$set:{price: req.body.price}},
      (error, result) => {
        if (!error) {
          console.log('Record updated successfully!');
          res.status(204).send();
        } else {
          console.log(error.message);
          res.status(204).send();
        }
      }
    );
};

const path = require('path');

let getMainPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'index.html'));
};

let getDisplayCoursesPage = (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', '..', 'frontend', 'displayCourse.html')
    );
};

let getAddCoursePage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'addCourse.html'));
};

let getUpdateCoursePage = (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', '..', 'frontend', 'updateCourse.html')
    );
};

let getDeleteCoursePage = (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', '..', 'frontend', 'deleteCourse.html')
    );
};





module.exports={getAllCourseDetails, addCourse, updateCourse, deleteCourse, getMainPage,
    getDisplayCoursesPage,getAddCoursePage,getUpdateCoursePage,getDeleteCoursePage};