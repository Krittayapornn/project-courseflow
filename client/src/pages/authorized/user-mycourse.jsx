import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../../components/mycourses/buttons";
import Navbarnonuser from "../../components/homepage/navbar-user";
import CourseCard from "../../components/mycourses/all-courses";
import UserProfileCard from "../../components/mycourses/user-profile";
import Footer from "../../components/homepage/footer";

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
      {/* SVG section for bg */}
      <div className="absolute top-[13rem] right-[5rem] md:top-[8rem]">
        <svg
          width="32"
          height="30"
          viewBox="0 0 32 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.35814 5.90994L29.1499 1.97744L19.6597 26.28L3.35814 5.90994Z"
            stroke="#FBAA1C"
            stroke-width="3"
          />
        </svg>
      </div>
      <div className="absolute top-[9rem] left-[5rem]">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.5" cy="5.5" r="4" stroke="#2F5FAC" stroke-width="3" />
        </svg>
      </div>
      <div className="absolute top-[12rem] left-[-0.8rem] md:left-8">
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13.1741" cy="13.1741" r="13.1741" fill="#C6DCFF" />
        </svg>
      </div>
      <div className="absolute top-[100rem] md:right-0 md:top-[12rem] ">
        <svg
          width="53"
          height="74"
          viewBox="0 0 53 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37" cy="37" r="37" fill="#C6DCFF" />
        </svg>
      </div>
      <div className="absolute top-[100rem] md:left-[23rem] md:top-[12rem] z-10">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.843 1.99998L8.83754 20.6805"
            stroke="#2FAC61"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2.00035 8.83751L20.6809 13.8429"
            stroke="#2FAC61"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      {/* SVG section for bg */}
      <Navbarnonuser />
      <div className="realative -mb-[26rem] ">
        <div className="mt-[5rem] mb-4 lg:ml-[5rem] z-20 flex flex-col justify-center items-center">
          <p className="text-black text-Headline2 mb-9 font-medium bg-white px-2">
            My Courses
          </p>
          <div className="flex justify-center">{<Buttons />}</div>
        </div>

        <div className="mx-auto p-4 lg:ml-[40rem]">
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
      </div>

      {<UserProfileCard />}
      {<Footer />}
      <div className="mb-[8rem] lg:mb-0 "></div>
    </>
  );
}

export default UserMycourse;
