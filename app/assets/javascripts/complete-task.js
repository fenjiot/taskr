$(function() {
  var completeTaskDataFromServer = function() {
    var completeButton = $(this);
    var taskData = completeButton.serialize();
    var conversation = $.ajax({
      type: "PATCH",
      url: completeButton.attr("action"),
      data: taskData
    });
    conversation.done(addTaskToList);
    resetIncompleteTaskList(completeButton);
    conversation.fail(onFailure);
    return false;
  };

  $("body").on("submit", ".complete-form", completeTaskDataFromServer);

  var resetIncompleteTaskList = function(element){
    element.parents("li").fadeOut();
  };

  var addTaskToList = function(taskHTML) {
    var taskList = $("#complete-tasks-list");
    taskList.prepend(taskHTML);
    $("#errors").html("");
  };

  var onFailure = function(xhr) {
   var htmlFromServer = xhr.responseText;
   $("#errors").html(htmlFromServer);
   console.log("FAIL UPDATE");
  };
});
