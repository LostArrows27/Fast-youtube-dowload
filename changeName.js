var UETNavigation = document.querySelector(".block_navigation");

if (UETNavigation) {
  var courseName = [];
  var courseIdList = UETNavigation.querySelectorAll("li.type_course.depth_3");
  for (let i = 0; i < courseIdList.length; i++) {
    var currentCourseInfo = courseIdList[i].innerText;
    var currentCourseId = currentCourseInfo.split("_")[1];
    var currentCourseClass = currentCourseInfo.split("_")[2];
    var currentCourseName = courseIdList[i].querySelector("a");
    var findClass = currentCourseName.title.split("(");
    currentCourseName.innerText = findClass[0] + "\n";
    if (currentCourseId && currentCourseClass) {
      currentCourseName.innerText +=
        `   (${currentCourseId} ` + currentCourseClass.slice(0, 2).trim() + ")";
    }
  }
}

var activeName = document.querySelector(
  ".tree_item.branch.active_tree_node.canexpand > a"
);
if (activeName) activeName.style = "color: #004683;";
