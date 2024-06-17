import React from 'react';

const Comment = () => {
    return (
        <div>
            <div className='Comment'>
                <label className="email">Email address</label>
                <input type="email" classname="form-control" placeholder="name@example.com"/>
                </div>
                <div className='text-Area'>
                <label classname="text-area">Entrez votre commentaire</label>
                <textarea class="form-control" id="" rows="3"></textarea>
            </div>
        </div>
    );
};

export default Comment;