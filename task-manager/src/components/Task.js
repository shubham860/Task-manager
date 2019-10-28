import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ post: { name, descripton, id, startDate,endDate }, onDelete }) => {
  return (
    <div style={ styles }>
      <h1 className='display-1'></h1>
      <h2>{ name }</h2>
      <p>{ descripton }</p>
      <h2>{ startDate }</h2>
      <h2>{ endDate }</h2>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Remove Feeds
      </button>
    </div>
  );
};
