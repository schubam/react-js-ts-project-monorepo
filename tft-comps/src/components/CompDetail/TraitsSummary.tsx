import React from "react";
import "./TraitsSummary.css";

interface Props {}

const TraitsSummary = ({}: Props) => {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="icon">
          <img src="/images/traits/blaster.png" alt="blaster" />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ratione
          vel laudantium modi esse qui dicta deleniti, aliquid earum fugit
          molestiae, quia architecto neque est dolore consequuntur culpa alias
          consequatur!
        </div>
      </div>
      <div className="row">
        <div className="icon">
          <img src="/images/traits/mystic.png" alt="mystic" />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ratione
          vel laudantium modi esse.
        </div>
      </div>
    </div>
  );
};

export default TraitsSummary;
