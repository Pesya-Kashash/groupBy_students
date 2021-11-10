import "./styles.css";
const _ = require("lodash");
const { map, groupBy, omit } = _;

export default function App() {
  const list = [
    {
      courseId: 2,
      courseName: "course2",
      schoolId: 1,
      schoolName: "school1",
      id: 1,
      name: "Pessi",
      lname: "Slutsh",
      email: "pesi79819@gmail.com",
      password: "$2b$12$7Ue2tuAq1oucPVVIrMB8c.bHNedCd7TfsgBrU/8Mm9wQ9RONLJca.",
      address: "Ben David 41",
      phone: "+972583279819",
      permission: 1,
      resetPasswordToken: "a33b4e66be9fd07cbcb91d525ac2ddd06f2e0f71",
      resetPasswordExpires: "2021-10-12 00:00:00",
      language: null,
      themeId: 1,
      profilePicture: "profiles/1.JPG",
      status: 1,
      active: 0,
      fileId: 113
    },
    {
      courseId: 2,
      courseName: "course2",
      schoolId: 1,
      schoolName: "school1",
      id: 3,
      name: "Ayala",
      lname: "Pita",
      email: "i0583279819@gmail.com",
      password: "$2b$12$XtSOkFIfXjYhVojXoE5wv.tDfyn.KIMT6IrZRmezk4Jme6Sqt8LS6",
      address: "pitza baribua",
      phone: "+9725K3279819",
      permission: 1,
      resetPasswordToken: "70d0c76a8c85899d7ae9dfb1d52da9bf1cf9ea18",
      resetPasswordExpires: "2021-10-18 00:00:00",
      language: "Hebrew",
      themeId: 1,
      profilePicture: null,
      status: 1,
      active: 0,
      fileId: null
    },
    {
      courseId: 2,
      courseName: "course2",
      schoolId: 1,
      schoolName: "school1",
      id: 2,
      name: "Gili",
      lname: "Gold",
      email: "pesi79819.job@gmail.com",
      password: "$2b$12$b7ipLFL3IKY0V5nbY4TfLe72CQ4PHPK5D75Rwb3MRxvVsmVAkAhnu",
      address: "גיבורי ישראל",
      phone: "+972583279819",
      permission: 1,
      resetPasswordToken: "59121a97a7a02fbefc72df50136ab6f516803702",
      resetPasswordExpires: "2021-10-18 00:00:00",
      language: null,
      themeId: 1,
      profilePicture: null,
      status: 1,
      active: 0,
      fileId: null
    },
    {
      courseId: 2,
      courseName: "course2",
      schoolId: null,
      schoolName: null,
      id: 5,
      name: "",
      lname: "",
      email: "zk0556776280@gmail.com",
      password: "",
      address: "",
      phone: "",
      permission: 1,
      resetPasswordToken: "7e7ea7c9c32c89d870dd5c5a224f09167cf8d82f",
      resetPasswordExpires: "2021-10-26 00:00:00",
      language: null,
      themeId: 1,
      profilePicture: null,
      status: 0,
      active: 0,
      fileId: null
    },
    {
      courseId: 2,
      courseName: "course2",
      schoolId: null,
      schoolName: null,
      id: 6,
      name: "",
      lname: "",
      email: "k67018@gmail.com",
      password: "",
      address: "",
      phone: "",
      permission: 1,
      resetPasswordToken: "2ed4a5c633610f10b9e9219aaef553ebbc1d03af",
      resetPasswordExpires: "2021-10-26 00:00:00",
      language: null,
      themeId: 1,
      profilePicture: null,
      status: 0,
      active: 0,
      fileId: null
    },
    {
      courseId: 2,
      courseName: "course2",
      schoolId: null,
      schoolName: null,
      id: 7,
      name: "",
      lname: "",
      email: "E0504182258@gmail.com",
      password: "",
      address: "",
      phone: "",
      permission: 1,
      resetPasswordToken: "ea49db87ec4b9c0365508c54caa56ce60c6c404e",
      resetPasswordExpires: "2021-10-26 00:00:00",
      language: null,
      themeId: 1,
      profilePicture: null,
      status: 0,
      active: 0,
      fileId: null
    },
    {
      courseId: 2,
      courseName: "course2",
      schoolId: null,
      schoolName: null,
      id: 8,
      name: "",
      lname: "",
      email: "BOOL76280@gmail.com",
      password: "",
      address: "",
      phone: "",
      permission: 1,
      resetPasswordToken: "b723cd01553be024db3c39fbd843fed6a6ceed16",
      resetPasswordExpires: "2021-10-26 00:00:00",
      language: null,
      themeId: 1,
      profilePicture: null,
      status: 0,
      active: 0,
      fileId: null
    },
    {
      courseId: 2,
      courseName: "course2",
      schoolId: null,
      schoolName: null,
      id: 9,
      name: "",
      lname: "",
      email: "shelanoostood@gmail.com",
      password: "",
      address: "",
      phone: "",
      permission: 1,
      resetPasswordToken: "2e670d83880aec4ccd60cde026a89083a716440f",
      resetPasswordExpires: "2021-10-26 00:00:00",
      language: null,
      themeId: 1,
      profilePicture: null,
      status: 0,
      active: 0,
      fileId: null
    },
    {
      courseId: 11,
      courseName: "pessiCourseSchool",
      schoolId: 12,
      schoolName: "pessiSchool8",
      id: 3,
      name: "Ayala",
      lname: "Pita",
      email: "i0583279819@gmail.com",
      password: "$2b$12$XtSOkFIfXjYhVojXoE5wv.tDfyn.KIMT6IrZRmezk4Jme6Sqt8LS6",
      address: "pitza baribua",
      phone: "+9725K3279819",
      permission: 1,
      resetPasswordToken: "70d0c76a8c85899d7ae9dfb1d52da9bf1cf9ea18",
      resetPasswordExpires: "2021-10-18 00:00:00",
      language: "Hebrew",
      themeId: 1,
      profilePicture: null,
      status: 1,
      active: 0,
      fileId: null
    }
  ];

  var groupBy_student = (list) => {
    let groups = map(groupBy(list, "id"), (list, key) => ({
      //set the lesson- the key, what will be include in the key
      userId: key,
      id: key,
      name: list[0].name,
      lname: list[0].lname,
      email: list[0].email,
      phone: list[0].phone,
      courses: list
        .map((item) => {
          return { courseId: item.courseId, courseName: item.courseName };
        })
        .filter(
          (x, i) =>
            x.courseId != null &&
            list.findIndex((c) => c.courseId === x.courseId) === i
        ),
      schools: list
        .map((item) => {
          return { schoolId: item.schoolId, schoolName: item.schoolName };
        })
        .filter(
          (x, i) =>
            x.schoolId != null &&
            list.findIndex((c) => c.schoolId === x.schoolId) === i
        )
    }));
    return groups;
  };

  var groupBy_schools = (list) => {
    let groups = map(groupBy(list, "schoolId"), (list, key) => ({
      //set the lesson- the key, what will be include in the key
      schoolId: key,
      id: key,
      name: list[0].schoolName,
      courses: list
        .map((item) => {
          return { courseId: item.courseId, courseName: item.courseName };
        })
        .filter(
          (x, i) =>
            x.courseId != null &&
            list.findIndex((c) => c.courseId === x.courseId) === i
        ),
      students: list.map((item) => {
        return {
          userId: item.id,
          userName: item.name,
          lname: list[0].lname,
          email: list[0].email,
          phone: list[0].phone
        };
      })
    })).filter((x) => x.name != null);
    return groups;
  };

  var groupBy_courses = (list) => {
    let groups = map(groupBy(list, "courseId"), (list, key) => ({
      //set the lesson- the key, what will be include in the key
      courseId: key,
      id: key,
      name: list[0].courseName,
      schools: list
        .map((item) => {
          return { schoolId: item.schoolId, schoolName: item.schoolName };
        })
        .filter(
          (x, i) =>
            x.schoolId != null &&
            list.findIndex((c) => c.schoolId === x.schoolId) === i
        ),
      students: list.map((item) => {
        return {
          userId: item.id,
          userName: item.name,
          lname: list[0].lname,
          email: list[0].email,
          phone: list[0].phone
        };
      })
    })).filter((x) => x.name != null);
    return groups;
  };

  console.log("list:", list);
  let students_group = groupBy_student(list);
  let schools_group = groupBy_schools(list);
  let courses_group = groupBy_courses(list);

  console.log("myGroups:", courses_group);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
