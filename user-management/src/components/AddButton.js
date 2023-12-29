import React from 'react'
import './AddButton.css'
import addImg from "../assets/add.png"

function AddButton() {
  return (
    <div className='add-user'>
        <button>
            <img src={addImg} alt='add-users'/>
        </button>
    </div>
  )
}

export default AddButton