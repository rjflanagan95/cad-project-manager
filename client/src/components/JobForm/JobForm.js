import React, { Component } from "react";
import "./JobForm.css";

class JobForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobNumber: "",
            fixtReq: false,
            drawingReq: false,
            jobNotes: ""
        }

        this.changeUserInput = this.changeUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeUserInput(target) {
        this.setState({
          [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state);
        document.getElementById("job-form").reset();
    }

    render() {
        return (
            <div className="section">
                <div id="form-header">Add a Job</div>
                <form id="job-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Job Number:
                            <input type="text" id="job-num" name="jobNumber" onChange={(e) => this.changeUserInput(e.target)}></input>
                        </label>
                    </div>
                    <div>
                        <label>Fixture Required?
                            <input type="checkbox" id="fixture-req" name="fixtReq" onChange={(e) => this.changeUserInput(e.target)}></input>
                        </label>
                    </div>
                    <div>
                        <label>Drawing Required?
                            <input type="checkbox" id="drawingReq" name="drawingReq" onChange={(e) => this.changeUserInput(e.target)}></input>
                        </label>
                    </div>
                    <div>
                        <label>Notes:
                            <input type="text" id="jobNotes" name="jobNotes" onChange={(e) => this.changeUserInput(e.target)}></input>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Add Job</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default JobForm;