import React from "react";
import AppContainer from "./AppContainer";
const Add = () => {
    return (
        <div className="Add__container container">
            <form>
                <div className="form-group">
                    <lebel>Title</lebel>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <lebel>Description</lebel>
                    <textarea className="form-control" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success">
                        ADD
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;
