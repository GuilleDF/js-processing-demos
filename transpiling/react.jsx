import React, { useState, useCallback } from 'react';

const MyComponent = (props) => {
  const [value, setValue] = useState(false);

  const toggleValue = useCallback(() => setValue((value) => !value), [
    setValue,
  ]);

  return (
    <div>
      <input type='checkbox' checked={value} />
      <button onClick={toggleValue} />
    </div>
  );
};
