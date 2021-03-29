import React, { useState, useEffect } from "react";
import {useHistory, useParams } from "react-router-dom";
import AppContainer from "./AppContainer";
import api from "../api"
const Edit = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const onEditSubmit = async () => {
        setLoading(true);
        try{
            await api.updatePost({
                title, description,
            }, id);
            swal("Good job!", "Post Updated Successfully!", "success");
            history.push('/')
        } catch{
            alert("Faild to Edit post")
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        const ID = props.match.params.id;
        api.getAllPosts(ID).then(res => {
            const result = res.data;
            const post = result.data;
            setTitle(post.title);
            setDescription(post.description);
        })
    }, []);

    return (
        <AppContainer title="Edit Post">
            <div className="Edit__container container">
                <form>
                    <div className="form-group">
                        <lebel>Title</lebel>
                        <input 
                        className="form-control" 
                        type="text" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <lebel>Description</lebel>
                        <textarea 
                        className="form-control" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={onEditSubmit}
                        disabled={loading}
                        >
                            {loading ? 'LOADING..': 'Edit'}
                        </button>
                    </div>
                </form>
            </div>
        </AppContainer>
    );
};

export default Edit;
