class CaseManagementsController < ApplicationController
  before_action :set_case_management, only: [:show, :edit, :update, :destroy]

  # GET /case_managements
  # GET /case_managements.json
  def index
    @case_managements = CaseManagement.all
  end

  # GET /case_managements/1
  # GET /case_managements/1.json
  def show
  end

  # GET /case_managements/new
  def new
    @case_management = CaseManagement.new
  end

  # GET /case_managements/1/edit
  def edit
  end

  # POST /case_managements
  # POST /case_managements.json
  def create
    @case_management = CaseManagement.new(case_management_params)

    respond_to do |format|
      if @case_management.save
        format.html { redirect_to @case_management, notice: 'Case management was successfully created.' }
        format.json { render :show, status: :created, location: @case_management }
      else
        format.html { render :new }
        format.json { render json: @case_management.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /case_managements/1
  # PATCH/PUT /case_managements/1.json
  def update
    respond_to do |format|
      if @case_management.update(case_management_params)
        format.html { redirect_to @case_management, notice: 'Case management was successfully updated.' }
        format.json { render :show, status: :ok, location: @case_management }
      else
        format.html { render :edit }
        format.json { render json: @case_management.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /case_managements/1
  # DELETE /case_managements/1.json
  def destroy
    @case_management.destroy
    respond_to do |format|
      format.html { redirect_to case_managements_url, notice: 'Case management was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_case_management
      @case_management = CaseManagement.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def case_management_params
      params.fetch(:case_management, {})
    end
end
