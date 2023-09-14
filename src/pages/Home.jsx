import React, { useState } from 'react'
import { useDeleteDataMutation, usePostDataMutation } from '../rtq/api'
import { useNavigate } from 'react-router-dom'

const Home = (data) => {
    const navigate = useNavigate()
    const [postData, setPostData] = useState({
        firstName: '',
        lastName: '',
    })
    const [fun, res] = usePostDataMutation()
    const changeEvent = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value })
    }
    const postDataBtn = () => {
        fun(postData)
    }
    const [del, response] = useDeleteDataMutation()

    const editBtn = (id) => {
        navigate(`/edit/${id}`)
    }
    return (
        <div className='table-container'>
        <h2>CRUD Using RTK Query</h2>
            <div className='post-container' >
                <input required type='text' placeholder='firstName' name='firstName' onChange={changeEvent} />
                <input required type='text' placeholder='lastName' name='lastName' onChange={changeEvent} />
                <button onClick={postDataBtn} >Post</button>
            </div>
            {
                data.data && data.data.map((item) => {
                    return (
                        <div className='fetch-data-con' key={item.id}>
                            <div className='name-name' >
                                <span>{item.firstName}</span>
                                <span>{item.lastName}</span>
                            </div>
                            <div className='btn-con' >
                                <button onClick={() => editBtn(item.id)} >Edit</button>
                                <button onClick={() => del(item.id)} >Delete</button>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home