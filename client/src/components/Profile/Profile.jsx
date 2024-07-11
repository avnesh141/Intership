import React, { useContext, useEffect, useState } from 'react'
import context from '../Contexts/Context'
import './Profile.css'
import { useNavigate } from 'react-router-dom';

function Profile() {
const cntxt=useContext(context);
const {user,userPosts,applications}=cntxt;
// console.log(userPosts.length)
// console.log(applications.length)
const navigate=useNavigate();
const [loginInfo,setInfo]=useState([]);
console.log(user)
useEffect(() => {
    let token="tokenEmp";
    if(sessionStorage.getItem('type')=="Candidate")
    {
       token="tokenCand";
    }
  const func=async()=>{
    console.log(localStorage.getItem(token))
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
        console.log(json)
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
             {applications?.length && applications.map((ele,key)=>{
                 return <ul>
                    <li>{ele.postId?.role}</li>
                    <li>{ele.postId?.company}</li>
                    <li>{ele.postId?.JobOrIntern}</li>
                    <li>{ele.status?"Approved":"Pending"}</li>
                </ul>
             })}
       </div>}
      {user?.type=='Employee' && <div className="posts">
        <h1>Your Job Posts</h1>
        {userPosts?.length && userPosts.map((ele,key)=>{
            return <ul>
                    <li>{ele.postId?.role}</li>
                    <li>{ele.postId?.company}</li>
                    <li>{ele.postId?.JobOrIntern}</li>
                </ul>
             })}
       </div>}
      { <div className="posts">
        <h1>Recent Login</h1>
        {loginInfo!=[] && loginInfo.map((ele,key)=>{
            return <ul>
                    <li>{ele.os}</li>
                    <li>{ele.ip}</li>
                    <li>{ele.device}</li>
                    <li>{ele.browser}</li>
                </ul>
             })}
       </div>}
    </div>}
             </>
  )
}

export default Profile