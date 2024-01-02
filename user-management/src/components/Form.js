import { useState } from 'react';
import './form.css'


function Form({handleReset}) {
    const [info , setInfo] = useState({
        name : '',
        email : '',
        contact : '',
        age : '',
        department : '',
    })
    console.log(handleReset)

    const handleChange = (e) =>{
        // const newInfo = e.target;
        setInfo((prev) =>({
            ...prev,
            [e.target.name] : e.target.value,
        }))
    }
    console.log(info)

  return (
    <div className="form">
     <div className='form-widget'>
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
                <label htmlFor='contact'>Contact :
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
             <button  onClick={handleReset} className='submit-button'>
               Submit
             </button>
        </form>
    </div>
    </div>
  )
}

export default Form;