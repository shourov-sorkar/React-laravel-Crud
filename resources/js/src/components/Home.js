import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        
        api.getAllPosts().then((res) => {
            const result = res.data;
            setPosts(result.data);
        });
    }, []);

    const renderPosts = () => {
        if (!posts) {
            return (
                <tr>
                    <td colSpan="4">Loading Posts....</td>
                </tr>
            );
        }
        if (posts.length == 0) {
            return (
                <tr>
                    <td colSpan="4">There is no post yet. Add one.</td>
                </tr>
            );
        }
        return posts.map((post) => (
            <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <div className="dropdown mr-1">
                        <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            id="dropdownMenuOffset"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-offset="10,20"
                        >
                            <FontAwesomeIcon icon={faCog} />
                        </button>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuOffset"
                        >
                            <Link to="/edit/1" className="dropdown-item">
                                Edit
                            </Link>
                            <Link to="/" className="dropdown-item">
                                Delete
                            </Link>
                        </div>
                    </div>
                </td>
            </tr>
        ));
    };
    return (
        <AppContainer title="Laravel React - CRUD">
            <Link to="/add" className="btn btn-primary">
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
                    <tbody>{renderPosts()}</tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;
