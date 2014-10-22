class Task < ActiveRecord::Base
  validates :title, presence: true
  validates :description, presence: true

  belongs_to :user

  def self.incomplete
    where(completed: false)
  end

  def self.complete
    where(completed: true)
  end
end
