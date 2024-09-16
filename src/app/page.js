'use client';

import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React,{useEffect,useState} from 'react'
import SignIn from "./auth/signin/page";




export default function Home() {
  const [username, setUsername] = useState('')
  const [userstate, setuserstate] = useState(false);
  const [useremail, setUseremail] = useState('')
    useEffect(() => {
        var token = localStorage.token; 
        console.log(token)
        if(token){
            setuserstate(token);
            setUsername(token.username)
            setUseremail(token.email)
        }
        else {
            setUsername('')
            setUseremail('')
        }
    }, [])
  return (
    <>
{userstate?
     <DefaultLayout>   
        <ECommerce />
      </DefaultLayout>
      
      :
      <SignIn />
    }
    </>
    );
}
