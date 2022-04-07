import React, { useState } from 'react';

import { Slider } from 'primereact/slider';

import './Range.scss';

const Range = () => {
  const min= 1000;
  const max= 600000;
    const [value, setValue] = useState([59000,457000]);

  return (
    <div>
      <h5>{value[0]}€ - {value[1]}€</h5>
                <Slider min={min} max={max} value={value} onChange={(e) => setValue(e.value)} range />
    </div>
  );
}

export default Range;