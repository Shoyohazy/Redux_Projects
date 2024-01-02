import { useState } from 'react';
import './form.css'
import { useDispatch } from 'react-redux';
import { addUsers } from '../store/UserReducer';


function Form({handleReset}) {
  const dispatch = useDispatch();
    const [info , setInfo] = useState({
        name : '',
        email : '',
        contact : '',
        age : '',
        department : '',
    })

    const handleChange = (e) =>{
        // const newInfo = e.target;
        setInfo((prev) =>({
            ...prev,
            [e.target.name] : e.target.value,
        }))
    }

    const handleSubmit = () =>{
      dispatch(addUsers(info));
      handleReset();
    }

  return (
    <div className="form">
        <form >       
            <div className='labels'>
                <label>Name : </label>
                  <input value={info.name} name='name' onChange={handleChange} type="text" placeholder="Enter Your Name"/>
            </div>
            <div className='labels'>
                <label>Email :
                </label>
                  <input value={info.email} name='email' onChange={handleChange} type="text" placeholder="Enter Your Email Address"/>
            </div>
            <div className='labels'>
                <label >Contact :
                </label>
                  <input value={info.contact} onChange={handleChange}  name='contact' type="text" placeholder="Contact No."/>
            </div>
            <div className='labels'>
                <label>Age :
                </label>
                  <input value={info.age} name='age' onChange={handleChange} type="text" placeholder="Your Age"/>
            </div>          
             <div className='labels'>
                 <label>Department :
                 </label>
                  <input value={info.department} name='department' onChange={handleChange}  type="text" placeholder="Department?"/>
             </div>
             <button type='submit'  onClick={handleSubmit} className='submit-button'>
               Submit
             </button>
        </form>
    </div>
  )
}

export default Form;