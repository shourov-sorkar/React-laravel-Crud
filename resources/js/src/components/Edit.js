import React from "react";
import AppContainer from "./AppContainer";
const Edit = () => {
    return (
        <AppContainer title="Edit Post">
            <div className="Edit__container container">
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
                            UPDATE
                        </button>
                    </div>
                </form>
            </div>
        </AppContainer>
    );
};

export default Edit;
