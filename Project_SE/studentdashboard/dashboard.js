var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
queryString=queryString.split("=");
var user=queryString[1];

function Profile()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/studentprofile.html?user="+user;
}

function home()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/studentsdashboard.html?user="+user;
}

function Attendance()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/attendance.html?user="+user;
}

function TT()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/timetable.html?user="+user;
}

function Faculty()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/facultyview.html?user="+user;
}

function Courses()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/coursesview.html?user="+user;
}

function Assignments()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/assignments.html?user="+user;
}

function Exam()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/examschedule.html?user="+user;
}

function MarksGrades()
{
    window.location.href="http://localhost/Project_SE/studentdashboard/marksandgrades.html?user="+user;
}



