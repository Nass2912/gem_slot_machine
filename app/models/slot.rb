class Slot < ApplicationRecord
  has_many :appointments
  belongs_to :doctor
end
