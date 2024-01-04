import './form.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, changeIsUpdating, deleteUpdatedUser, updateUsers } from '../store/UserReducer';


function Form({handleReset}) {
  const dispatch = useDispatch();
  const updateUser = useSelector((state) => state.updateUser);
  
    function handleSubmit(e){
      e.preventDefault()
      const fd = new FormData (e.target);
      const data = Object.fromEntries(fd.entries());
      if(updateUser){
        console.log("updatin..")
        dispatch(updateUsers({id: updateUser.id, data}))
        dispatch(changeIsUpdating())
        handleReset();
      }
      else{
        dispatch(addUsers(data));
      }
      handleReset();
      dispatch(deleteUpdatedUser())
    }

  return (
    <div className="form">
        <form autoComplete='true' onSubmit={handleSubmit}>       
            <div className='labels' >
                <label htmlFor='name'>Name : </label>
                  <input  name='name'   type="text" placeholder="Enter Your Name" required minLength={3}/>
            </div>
            <div className='labels'>
                <label htmlFor='email'>Email :
                </label>
                  <input  name='email'  type="email" placeholder="Enter Your Email Address" required/>
            </div>
            <div className='labels'>
                <label htmlFor='contact'>Contact :
                </label>
                  <input    name='contact' type="text" placeholder="Contact No." required/>
            </div>
            <div className='labels'>
                <label htmlFor='age'>Age :
                </label>
                  <input  name='age'  type="number" placeholder="Your Age" required/>
            </div>          
             <div className='labels'>
                 <label htmlFor='department'>Department :
                 </label>
                  <input name='department'   type="text" placeholder="Department?" minLength={3} required/>
             </div>
             <button type='submit' className='submit-button'>
               Submit
             </button>
        </form>
    </div>
  )
}

export default Form;