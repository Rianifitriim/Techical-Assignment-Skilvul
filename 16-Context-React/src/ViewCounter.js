import React from 'react';
import { useCount } from './CountContext'
const ViewCounter = () => {
  const count = useCount()
 
  console.log(count)
  // set state count from useCount
  return (
    <div>
      Count : {count.state.count}
      {/* change 0 with count from context */}
     
    </div>
  );
}

export default ViewCounter;