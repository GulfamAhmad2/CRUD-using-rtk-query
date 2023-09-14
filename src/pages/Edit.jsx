import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditDataMutation } from '../rtq/api'

const Edit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [values, setValue] = useState({
    id:params.id,
    firstName:'',
    lastName:'',
  });
  const changeEvent = (e) =>{
    const {name, value} = e.target;
    setValue({...values, [name] : value})
  }
  const [edit, res] = useEditDataMutation();

  const editBtn = () =>{
    edit(values)
    navigate('/')
  }
  return (
    <div className='edit-con' >
      <input placeholder='firstName' name='firstName' onChange={changeEvent} />
      <input placeholder='lastName' name='lastName' onChange={changeEvent} />
      <button onClick={()=>editBtn()} >Save</button>
    </div>
  )
}

export default Edit