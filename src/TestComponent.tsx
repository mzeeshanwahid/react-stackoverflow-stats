import React, { useState } from "react";

const TestComponent: React.FC = () => {
    const [show, setShow] = useState<Boolean>(false);

    return show ? <p>Show: true</p> : <p>Show: false</p>;
}

export default TestComponent;