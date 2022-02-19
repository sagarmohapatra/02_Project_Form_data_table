import React, { useState } from 'react'
function Data(props) {
    // const [record, setrecord] = useState(props.p)
    // console.log(props.p);

    return (
        <div className='container'>
            <div className=' bg-light'>
                <table className='table table-striped table-bordered table-hover text-center table-waring'>
                    <thead>
                        <tr>
                            <th>FirstName </th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Contact No</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.actualDetail.map((come, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{come.firstName}</td>
                                        <td>{come.lastName}</td>
                                        <td>{come.age}</td>
                                        <td>{come.mobile}</td>
                                        <td>{come.password}</td>

                                        <td>{come.gender}</td>
                                        <td className='delete-icon text-danger' onClick={() => { props.deletebtn(come.index) }}>
                                            <i class="fa fa-trash-alt"></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Data
