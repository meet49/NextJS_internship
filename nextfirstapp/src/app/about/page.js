"use client"
import User from '@/componets/User';
import Link from 'next/link';
import {useRouter} from 'next/navigation'
const About=()=>{
    const router = useRouter();
    return(
        <div>
            <h1>About Page</h1>
            <button onClick={()=>router.push("/")} >Go to Home Page</button>

            <User/>

        <br />
        <Link href="/about/aboutcollege" >Go to About College page</Link>
        <br /> <br />
        <Link href="/about/aboutstudent" >Go to About Student page</Link>

        </div>
    )
}

export default About;