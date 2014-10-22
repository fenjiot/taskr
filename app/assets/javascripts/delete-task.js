$(function() {
  var deleteTaskDataFromServer = function() {
    var deleteButton = $(this);
    var taskData = deleteButton.serialize();
    var conversation = $.ajax({
      type: "DELETE",
      url: deleteButton.attr("action"),
      data: taskData
    });
    deleteButton.parents("li").fadeOut();
    conversation.fail(onFailure);
    return false;
  };

  $("body").on("submit", "form.button_to", deleteTaskDataFromServer);

  var onFailure = function() {
    console.log("FAILURE fAILURE sad sad sad");
  };

});
