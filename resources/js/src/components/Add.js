import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import AppContainer from "./AppContainer";
import api from "../api"
const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const onAddSubmit = async () => {
        setLoading(true);
        try{
            await api.addPost({
                title, description,
            })
            history.push('/')
        } catch{
            alert("Faild to add post")
        } finally{
            setLoading(false);
        }
    };

    return (
        <AppContainer title="Add Post">
            <div className="Add__container container">
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
                        onClick={onAddSubmit}
                        disabled={loading}
                        >
                            {loading ? 'LOADING..': 'ADD'}
                        </button>
                    </div>
                </form>
            </div>
        </AppContainer>
    );
};

export default Add;
