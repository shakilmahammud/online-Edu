import React from 'react';
import './Course.css'

const Course = (props) => {
    // console.log(props)
    const {title, author, price, img} = props.course;
    return (
   
            <div className="col-md-4 float-left p-3">
            <div className="course-container">
            <img src={img} className="w-100" alt=""/>
            <h6>{title}</h6>
            <p><small className="text-secondary">By {author}</small></p>
            <h3 className="text-danger">${price}</h3>
            <button className="btn btn-success enrollBtn" onClick={() => props.addToCart(props.course)}>Enroll</button>
            </div>
        </div>
    );
};

export default Course;