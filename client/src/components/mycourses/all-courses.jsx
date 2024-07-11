function CourseCard({ photo, title, description, lessonCount, hours }) {
  return (
    <>
      <div>
        <div className="flex flex-col gap-7 shadow-shadow1">
          <div className=" bg-white pb-3 rounded-lg w-[357px]">
            <div className="text-black">
              <img
                className="object-cover w-[357px] h-[240px] border rounded-t-lg"
                src={photo}
                alt={title}
              />
              <p className=" text-yellow-500 text-Body4 pt-3 px-4">Course</p>
              <p className="text-[20px] px-4">{title}</p>
              <p className="text-Gray-700 text-Body3 pt-2 pb-5 px-4 max-w-[330px]">
                {description}
              </p>
            </div>
            <div className="text-Gray-700 text-Body3 pt-4 px-4 border-t border-Gray-400">
              {`${lessonCount} Lesson`} <span>{`${hours} Hours`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
