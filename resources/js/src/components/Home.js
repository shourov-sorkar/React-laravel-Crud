import React from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";
const Home = () => {
    return (
        <AppContainer title="Laravel React - CRUD">
            <Link to="/add" class="btn btn-primary">
                Add Post
            </Link>
            <div className="table-responsive">
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Sample Title</td>
                            <td>Sample Description</td>
                            <td>
                                <Link to="/edit/1" className="btn btn-info">
                                    Edit
                                </Link>
                                <Link to="/" className="btn btn-danger">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;
