class CreateCaseManagements < ActiveRecord::Migration[5.1]
  def change
    create_table :case_managements do |t|

      t.timestamps
    end
  end
end
