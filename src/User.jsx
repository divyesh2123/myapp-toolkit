import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './slice/postsSlice';

export default function User() {

    const u = useSelector(y=>y.post);
    const dis = useDispatch();

    useEffect(()=>{

        dis(getPosts(1))

    },[])

    console.log(u);
  return (
    <div>User</div>
  )
}
