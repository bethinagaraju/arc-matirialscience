import React from 'react';
import HighletOne from './HighletOne';
import HighletTwo from './HighletTwo';
import HighletThree from './HighletThree';

const Highletsec: React.FC = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex gap-0 animate-scroll">
        <HighletOne />
        <HighletTwo />
        <HighletThree />
        {/* Duplicate for infinite scroll */}
        <HighletOne />
        <HighletTwo />
        <HighletThree />
        {/* Duplicate for infinite scroll */}
        <HighletOne />
        <HighletTwo />
        <HighletThree />
        {/* Duplicate for infinite scroll */}
        <HighletOne />
        <HighletTwo />
        <HighletThree />
        {/* Duplicate for infinite scroll */}
        <HighletOne />
        <HighletTwo />
        <HighletThree />
      </div>
    </div>
  );
};

export default Highletsec;
