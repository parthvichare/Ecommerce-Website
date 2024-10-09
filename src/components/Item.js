import React from 'react';

const Item = React.memo(({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
});

export default Item;
