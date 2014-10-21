class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    @incomplete_tasks = current_user.tasks.incomplete
    @completed_tasks = current_user.tasks.completed
    @task = Task.new
  end

  def create
    task = current_user.tasks.new(task_params)

    if task.save
      redirect_to :back
    else
      @tasks = current_user.tasks.reload
      @task = task
      @incomplete_tasks = current_user.tasks.incomplete
      @completed_tasks = current_user.tasks.completed
      render :index
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :description)
  end
end
