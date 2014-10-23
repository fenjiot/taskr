$(function() {
  var uncompleteTask = function() {
    var conversation = $.ajax({
      type:$(this).attr("method"),
      url: $(this).attr("action"),
      data: $(this).serialize()
    });

    $(this).parents("li").fadeOut();
    conversation.done(addTaskToUncompletedList);

    return false;
  };

  var addTaskToUncompletedList = function(html) {
    $("#incomplete-tasks-list").prepend(html);
  };

  $("body").on("submit", ".incomplete-form", uncompleteTask);
});

