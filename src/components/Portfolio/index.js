import React from 'react';
// import './style.css';
import { AiFillGithub, AiFillAppstore } from 'react-icons/ai';
// Props are passed through our functional component.
function Portfolio(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        {/* <img src={require(`../Portfolio/img/${props.image}.jpeg`)} alt= {props.name}  /> */}
      </div>
      <div className="card-body content">
        <h5 className="card-title">{props.name}</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a href={props.gitHub} id='portfolio-btn' target="blank" className="btn"><AiFillGithub className='portfolio-icons' /></a>
        <a href={props.app} id='portfolio-btn' target="blank" className="btn"><AiFillAppstore className='portfolio-icons' /></a>
      </div>

    </div>
  );
}

export default Portfolio;

