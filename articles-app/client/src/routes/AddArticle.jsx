/** @format */

import React from "react";

const AddArticle = () => {
    return (
        <div className="container">
            <h1>Add Article 😎</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" placeholder="Title" name="title" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea placeholder="Body" name="body" id="body" />
                </div>
                <button type="submit">Add Article</button>
            </form>
        </div>
    );
};

export default AddArticle;
