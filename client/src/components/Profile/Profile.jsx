import React, { useContext, useEffect, useState } from 'react'
import context from '../Contexts/Context'
import './Profile.css'
import { useNavigate } from 'react-router-dom';

function Profile() {
const cntxt=useContext(context);
const {user,userPosts,applications}=cntxt;
// console.log(userPosts.length)
// console.log(apptdcations.length)
const navigate=useNavigate();
const [loginInfo,setInfo]=useState([]);
// console.log(user)
useEffect(() => {
    let token="tokenEmp";
    if(sessionStorage.getItem('type')=="Candidate")
    {
       token="tokenCand";
    }
  const func=async()=>{
    // console.log(localStorage.getItem(token))
    const response=await fetch('/api/auth/logininfo',{
        method:"GET",
        headers:{
            "Content-type":"application/json",
            "authtoken":JSON.stringify(localStorage.getItem(token)),
            "type":sessionStorage.getItem('type')
        }
    })
    const json =await response.json();
    if(json.success)
    {
        // console.log(json)
        json.info.reverse()
        setInfo(json.info);
    }
  }
  func()
}, [])


  return (
    <>
    {user!=undefined && <div className="profile">
       <h1>Hello {user.name}</h1>
       <div className="profilephoto">
        <img src={user.picture} alt="" />
        <button onClick={()=>{
            navigate('/updateprofile')
        }} type='button' style={{width:"150px",position:"relative"}} className='admin'>Update Profile</button>
        </div>
        <div className="profiledetails">
            <ul>
                <li>Name</li>
                <li>Number</li>
                <li>Email</li>
                <li>Logged In As</li>
                <li>Subscription</li>
            </ul>
            <ul>
                <li>{user.name}</li>
                <li>{user.number}</li>
                <li>{user.email}</li>
                <li>{user.type}</li>
                <li>{user.Subscription}</li>
            </ul>
       </div>
      {user?.type=='Candidate' && <div className="applications">
        <h1>Your Applications</h1>
        <tr>
                    <td>Role</td>
                    <td>Company</td>
                    <td>JobType</td>
                    <td>Status</td>
                </tr>
             {applications?.length && applications.map((ele,key)=>{
                 return <tr>
                    <td>{ele.postId?.role}</td>
                    <td>{ele.postId?.company}</td>
                    <td>{ele.postId?.JobOrIntern}</td>
                    <td className='register'>{ele.status?"Approved":"Pending"}</td>
                </tr>
             })}
       </div>}
      {user?.type=='Employee' && <div className="posts">
        <h1>Your Job Posts</h1>
        <tr>
                    <td>Role</td>
                    <td>Company</td>
                    <td>JobType</td>
                </tr>
        {userPosts?.length && userPosts.map((ele,key)=>{
            return <tr>
                    <td>{ele.role}</td>
                    <td>{ele.company}</td>
                    <td>{ele.JobOrIntern}</td>
                </tr>
             })}
       </div>}
      { <div className="posts">
        <h1>Recent Login</h1>
        <table>

        <tr>
                    <td>Operating System</td>
                    <td>IP Address</td>
                    <td>Device</td>
                    <td>Browser</td>
                    <td>Time</td>
                </tr>
        {loginInfo!=[] && loginInfo.slice(0,Math.min(5,loginInfo.length)).map((ele,key)=>{
          return <tr>
                    <td>{ele.os}</td>
                    <td>{ele.ip}</td>
                    <td>{ele.device}</td>
                    <td>{ele.browser}</td>
                    <td>{ele.timestamp.slice(0,10)+" "+ele.timestamp.slice(12,20)}</td>
                </tr>
             })}
        </table>
       </div>}
    </div>}
             </>
  )
}

export default Profile