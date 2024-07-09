import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../../components/mycourses/buttons";

import CourseCard from "../../components/mycourses/all-courses";
import UserProfile from "../../components/mycourses/user-profile";

function UserMycourse() {
  const [courses, setCourses] = useState([
    {
      title: "Service Design Essentials",
      photo:
        "https://s3-alpha-sig.figma.com/img/400a/c1f5/df78f3719d9ab8ca3a8bc4c25ac9158c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=clHXm8ZLREHczu0~6376zUk7xvcYKJkVjKKrTEF3Xr8vJ~G~2IBqIxVEKgq06eYMCQiyzQRNOHyp8fmztnmo9FUXLQ6zoKSW-3OuUpZb-CBETuotfZgGbGXpWqFKsbZmKMQ0KZ2Ka5lb9RrnNifwbS2EChf9tbgGHQfpgdG38aS5aQyzGTcEDPzOWtNCYvjM07mocmetNolIzrUXDFqdZ8qIScQx6cNjz8py5wIlFkH7v0NhYVl51TQO3IIC0Twg~XpxODYjoYPI3BGSEqhObUaXBa72QR33wM-zTzr99GOZOL3EqnX~xZbArmPGrQwA8kV15saCWVUIY1BJNiYw8A__",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      lessonCount: 6,
      hours: 6,
    },
    {
      title: "Software Developer",
      photo:
        "https://s3-alpha-sig.figma.com/img/779f/5830/688d2cdcbdde3a749cee29071428191f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzLoQuSG8DyN2bienpzGmYq~7cHvcjGGTsP8UPlnUEqougC99E2d7st4LKbGo58IF4pJ5K2w2zrah6EDdDrtWRNLBdk5tIunwn6746BRfObJP74b~uXYrrzr1C5iphnjRf0e70~cV8pgbEhUKxXUUmtRPOtHvLx64EE7HLNE7i98X46BV-UhbDI6i2bTryZo6YzoDxQX0Vv6EeY58luxyh3~0GnEhQHJGI8erRCT~SGCj-Ur4d62H6kRJMyA4mYFirSZeTNkZvAiSfYYvxpDV-ZbUh6~XQPU~sUc8oISJSD7dcjeYyNJXK~yCgmv0NcFtP3fViRdA7zYI46jzMP6sA__",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      lessonCount: 6,
      hours: 6,
    },
    {
      title: "Data Analysis",
      photo:
        "https://s3-alpha-sig.figma.com/img/071b/5571/bb2cadcac1a0d10deaf378ba87608401?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFE1VZAYyb8HyBYgrEnOssppMoxwXxzYt~3Hy6JAuCeWTfxIAA19xtQTSIUVUUk1eDTmIxBQFjW1ZqY2BjcGTtfbQTHDWG2sv7OCm3MqJHerpVpYT9NupwOft0Zs9CrE3JHIwXiDYIMKnqx5XbGjGinijmy7hevIFvYd9Us2y7QTUOHbIkJUkOdxKPuw3xmobeswVNE1pC6FDzdam3VvvpfIjYkKppxnbM~dysKWGKEh1Zt-0uY4F2rdDJDpZaNGRw5C9Z6V2vzB-k8Q~x3-7LILJW4G3YqAmotq7V4rI9QKF6v6naQblieslLeOVMZQ~krjnBa3yTS7sFwXTVX8xw__",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      lessonCount: 6,
      hours: 6,
    },
    {
      title: "Software Developer",
      photo:
        "https://s3-alpha-sig.figma.com/img/400a/c1f5/df78f3719d9ab8ca3a8bc4c25ac9158c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=clHXm8ZLREHczu0~6376zUk7xvcYKJkVjKKrTEF3Xr8vJ~G~2IBqIxVEKgq06eYMCQiyzQRNOHyp8fmztnmo9FUXLQ6zoKSW-3OuUpZb-CBETuotfZgGbGXpWqFKsbZmKMQ0KZ2Ka5lb9RrnNifwbS2EChf9tbgGHQfpgdG38aS5aQyzGTcEDPzOWtNCYvjM07mocmetNolIzrUXDFqdZ8qIScQx6cNjz8py5wIlFkH7v0NhYVl51TQO3IIC0Twg~XpxODYjoYPI3BGSEqhObUaXBa72QR33wM-zTzr99GOZOL3EqnX~xZbArmPGrQwA8kV15saCWVUIY1BJNiYw8A__",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      lessonCount: 6,
      hours: 6,
    },
    {
      title: "Data Analysis",
      photo:
        "https://s3-alpha-sig.figma.com/img/071b/5571/bb2cadcac1a0d10deaf378ba87608401?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFE1VZAYyb8HyBYgrEnOssppMoxwXxzYt~3Hy6JAuCeWTfxIAA19xtQTSIUVUUk1eDTmIxBQFjW1ZqY2BjcGTtfbQTHDWG2sv7OCm3MqJHerpVpYT9NupwOft0Zs9CrE3JHIwXiDYIMKnqx5XbGjGinijmy7hevIFvYd9Us2y7QTUOHbIkJUkOdxKPuw3xmobeswVNE1pC6FDzdam3VvvpfIjYkKppxnbM~dysKWGKEh1Zt-0uY4F2rdDJDpZaNGRw5C9Z6V2vzB-k8Q~x3-7LILJW4G3YqAmotq7V4rI9QKF6v6naQblieslLeOVMZQ~krjnBa3yTS7sFwXTVX8xw__",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      lessonCount: 6,
      hours: 5,
    },
  ]);

  return (
    <>
      <div className="shadow-shadow2 max-w-screen-xl fixed top-0 w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 md:py-4 border-b border-b-[#e6ebf4]">
        <Link
          to="/"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md "
        >
          Test Navbar
        </Link>
      </div>

      <div className="mt-[5rem] mb-4 max-w-screen-xl lg:ml-[5rem]">
        <p className="text-black text-Headline2 mb-9 font-medium flex justify-center">
          My Courses
        </p>
        <div className="flex justify-center">{<Buttons />}</div>
      </div>

      <div className="mx-auto p-4 mb-[8rem] lg:ml-[40rem]">
        <div className="flex flex-wrap gap-4 lg:max-w-[740px] justify-center lg:justify-start">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              photo={course.photo}
              title={course.title}
              description={course.description}
              lessonCount={course.lessonCount}
              hours={course.hours}
            />
          ))}
        </div>
      </div>

      <footer></footer>
      {<UserProfile />}
    </>
  );
}

export default UserMycourse;
