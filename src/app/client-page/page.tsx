
'use client'
// this is a client-only component
import React, { useEffect, useState } from 'react';

type changeProps = {
  // props
};

const Change: React.FC<changeProps> = (props) => {
  const [age, setAge] = useState(0);
  console.log('age: ', 77777);

  useEffect(() => {
  console.log('age: ', 5555);

  }, []);
  return (
    <div>
      <p>client render</p>
      client age: {age}
      <button onClick={() => setAge(age + 1)}>+</button>
    </div>
  );
};

export default Change;