import React from 'react';

function CafeList(props) {

  return (
    <div>
      { names.map(name => <Cafe name={name} />)}
    </div>
  );
}

export default CafeList;
