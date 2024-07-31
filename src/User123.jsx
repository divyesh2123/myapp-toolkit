import React, { useEffect } from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import { UserRequest } from './slice/userslice';

export default function User123() {

    const d = useSelector(y=>y.user);

    const dis = useDispatch();

    console.log(d);

    useEffect(()=>{

        dis(UserRequest())

    },[])

  return (
    <div>{d}</div>
  )
}
