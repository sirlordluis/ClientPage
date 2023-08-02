import React from "react";

type StepTwoProps = {
  onSubmit: () => void;
  onPrevious: () => void;
};
const StepFour: React.FC<StepTwoProps> = ({ onPrevious, onSubmit }) => {
  return (
    <>
      <button onClick={onPrevious}>Revisar Folio</button>
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default StepFour;
