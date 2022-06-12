import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
function TestEffect() {
    useEffect(() => {
        clickMe()
    }, [])
    const apiLink = "https://api.github.com/users"

    const [allUser, setallUser] = useState([])
    const [errMes, seterrMes] = useState("")
    const [loading, setloading] = useState(true)
    const clickMe = () => {
        axios.get(apiLink).then((res) => {
            if (res.status > 200) {
                console.log(`There's an error`);
            }
            else {
                setallUser(res.data)
                setloading(false)
            }
        }).catch((err) => {
            seterrMes(`Guy there's an error here o`);
        })
    }
    return (
        <>
            <button className='btn btn-primary mt-5' onClick={clickMe} hidden>Change for Me</button>
            <div>
                <div className='text-center'>{errMes}</div>
                {
                    loading ? <div className="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div> :
                    <table className='table table-bordered mx-auto w-50 text-center my-auto'>
                        <thead>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Image</th>
                        </thead>
                        {
                            allUser.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.login}</td>
                                    <td><img src={user.avatar_url} alt='...' className='card-img-top w-25 h-25' /></td>
                                </tr>

                            ))
                        }

                    </table>
                }
            </div>
        </>
    )
}

export default TestEffect