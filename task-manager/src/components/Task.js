import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

const Task = (props) => {
  const {name,description,id,startDate,endDate,onDelete} = props.task;
  return (
    <div style={ styles }>
      <h1 className='display-1'></h1>
      <h2>{ name }</h2>
      <p>{ description }</p>
      <p>{ startDate }</p>
      <p>{ endDate }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Remove Feeds
      </button>
    </div>
  )
}

export default Task
