class AddDoctorReferenceToSlots < ActiveRecord::Migration[7.1]
  def change
    add_reference :slots, :doctor, foreign_key: true
  end
end
