import React from 'react'

const Button = ({ onClick }) => {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-success">
          <input type="radio" name="options" id="option1" autoComplete="off" /> Like
        </label>
        <label className="btn btn-primary">
          <input type="radio" name="options" id="option2" autoComplete="off" /> Edit
        </label>
        <label onClick={onClick} className="btn btn-success">
          <input type="radio" name="options" id="option3" autoComplete="off" /> Delete
        </label>
      </div>
  )
}

export default Button
