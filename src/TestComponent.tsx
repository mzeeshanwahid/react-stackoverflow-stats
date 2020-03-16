import React, { useState } from "react";

const TestComponent: React.FC = () => {
  const [show, setShow] = useState<Boolean>(false);

  return (
    <>
      {show ? <p>Show: true</p> : <p>Show: false</p>}
      <button style={{ margin: "30px" }} onClick={e => setShow(!show)}>
        Click Me
      </button>
    </>
  );
};

export default TestComponent;
