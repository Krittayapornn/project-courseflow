import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams , useNavigate  } from 'react-router-dom';
import CancelButton from '../button/cancel-button';
import SubButton from '../button/sub-button';

function EditAssignmentForm() {
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({});
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [subLessons, setSubLessons] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLesson, setSelectedLesson] = useState("");
  const [selectedSubLesson, setSelectedSubLesson] = useState("");
  const [assignmentDetail, setAssignmentDetail] = useState("");
  const [assignmentDuration, setAssignmentDuration] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  const fetchAssignment = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/admin/assignments/${id}`);
      console.log(result);
      const assignmentData = result.data.data;
      console.log(assignmentData);
      setAssignment(assignmentData);
      setSelectedCourse(assignmentData.courseid);
      setSelectedLesson(assignmentData.moduleid);
      setSelectedSubLesson(assignmentData.sublessonid);
      setAssignmentDetail(assignmentData.title);
      setAssignmentDuration(assignmentData.duedate);
    } catch (error) {
      console.error("Error fetching assignment:", error);
      setErrorMessage("Failed to fetch assignment details.");
    }
  };
  const fetchCourses = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/courses`);
      setCourses(result.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchLessons = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/admin/lesson`);
      console.log(result);
      setLessons(result.data);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };

  const fetchSubLessons = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/admin/sublesson`);
      setSubLessons(result.data);
    } catch (error) {
      console.error("Error fetching sublessons:", error);
    }
  };

  useEffect(() => {
    fetchSubLessons(selectedLesson);
  }, [selectedLesson]);

  useEffect(() => {
    fetchCourses();
    fetchLessons();
    fetchAssignment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedAssignment = {
        course: selectedCourse,
        lesson: selectedLesson,
        sub_lesson: selectedSubLesson,
        title: assignmentDetail,
        duedate: assignmentDuration,
      };

      console.log("Payload:", updatedAssignment);

      const response = await axios.put(
        `http://localhost:4000/admin/assignments/${id}`,
        updatedAssignment
      );

      if (response.status === 200) {
        alert("Assignment updated successfully");
        navigate("/admin/assignmentlist");
      } else {
        setErrorMessage("Unexpected response status");
      }
    } catch (error) {
      console.error("Error updating assignment:", error);
      setErrorMessage("Failed to update assignment.");
    }
  };

  return (
    <>
      <div className="bg-gray-100 w-full h-full flex flex-col items-center justify-center">
        <nav className="w-full h-[92px] bg-white border-gray-400 border-l-0 border-[1px] flex justify-between items-center">
          <span className="text-black font-medium text-2xl pl-10">Edit Assignment</span>
          <div className="flex gap-4 pr-10">
            <Link to="/admin/assignmentlist">
              <CancelButton text="Cancel" />
            </Link>
            <SubButton text="Update" onClick={handleSubmit} />
          </div>
        </nav>

        <form className="w-[1120px] h-[634px] my-10 mx-10 rounded-2xl border-2 bg-white text-black" onSubmit={handleSubmit}>
          <div className="w-[440px] h-[76px] mt-10 ml-[100px] flex flex-col">
            <label htmlFor="courseSelect" className="text-black text-base font-normal" style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}>
              Course
            </label>
            <div className="relative mt-1">
              <select
                id="courseSelect"
                className="block appearance-none w-full border text-muted-foreground py-2 px-[20px] pr-8 rounded-lg cursor-pointer"
                onChange={(e) => {
                  setSelectedCourse(e.target.value);
                  setSelectedLesson("");
                  setSelectedSubLesson("");
                }}
                value={selectedCourse}
              >
                <option value="">Select Course Name</option>
                {courses.map((course) => (
                  <option key={course.courseid} value={course.courseid}>
                    {course.coursename}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-muted-foreground">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-[920px] flex flex-row gap-10 mt-10 ml-[100px]">
            <div className="w-[440px]">
              <label htmlFor="lessonSelect" className="text-black text-base font-normal" style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}>
                Lesson
              </label>
              <div className="relative mt-1">
                <select
                  id="lessonSelect"
                  className="block appearance-none w-full border text-muted-foreground py-2 px-[20px] pr-8 rounded-lg cursor-pointer"
                  onChange={(e) => setSelectedLesson(e.target.value)}
                  value={selectedLesson}
                >
                  <option value="">Select Lesson</option>
                  {lessons.map((lesson) => (
                    <option key={lesson.moduleid} value={lesson.moduleid}>
                      {lesson.modulename}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-muted-foreground">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-[440px]">
              <label htmlFor="subLessonSelect" className="text-black text-base font-normal" style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}>
                Sub-Lesson
              </label>
              <div className="relative mt-1">
                <select
                  id="subLessonSelect"
                  className="block appearance-none w-full border text-muted-foreground py-2 px-[20px] pr-8 rounded-lg cursor-pointer"
                  onChange={(e) => setSelectedSubLesson(e.target.value)}
                  value={selectedSubLesson}
                >
                  <option value="">Select Sub-Lesson</option>
                  {subLessons.map((subLesson) => (
                    <option key={subLesson.sublessonid} value={subLesson.sublessonid}>
                      {subLesson.sublessonname}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-muted-foreground">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[920px] border-[1px] border-gray-400 mt-10 ml-[100px]" />

          <section id="assignment-detail" className="ml-[100px] ">
            <h1 className="font-semibold text-xl mt-10">Assignment Detail</h1>
            <div className="mt-10">
              <p className="font-normal text-base">Assignment *</p>
              <input
                type="text"
                className="w-[920px] h-12 border-[1px] rounded-lg pl-3"
                onChange={(e) => setAssignmentDetail(e.target.value)}
                value={assignmentDetail}
                placeholder="Enter assignment detail"
              />
            </div>
            <div className="mt-10">
              <label htmlFor="durationSelect" className="text-black text-base font-normal" style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}>
                Duration
              </label>
              <div className="relative mt-1">
                <select
                  id="durationSelect"
                  className="block appearance-none w-full border text-muted-foreground py-2 px-[20px] pr-8 rounded-lg cursor-pointer"
                  onChange={(e) => setAssignmentDuration(e.target.value)}
                  value={assignmentDuration}
                >
                  <option value="">Select Duration</option>
                  <option value="30m">30 minutes</option>
                  <option value="1h">1 hour</option>
                  <option value="1h30m">1 hour 30 minutes</option>
                  <option value="2h">2 hours</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-muted-foreground">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}

export default EditAssignmentForm;