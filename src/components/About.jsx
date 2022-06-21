import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("We are going to the details page, looking for: Rayquaza.");
    navigate("/details/rayquaza");
  };

  return (
    <div>
      <h1>About page</h1>
      <button onClick={handleClick}>Go to detail page</button>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
        eligendi maiores, officia aspernatur temporibus fugit, dicta provident,
        facere ratione laborum odio soluta dolores nulla. Obcaecati eius
        accusamus doloremque. Error, esse.
      </p>
    </div>
  );
};

export default About;
