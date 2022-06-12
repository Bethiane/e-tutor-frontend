import { useState } from "react";
import Button from "../components/Button";
import LayoutOne from "../layout/LayoutOne";

export default function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <LayoutOne>
            <form onSubmit={(e)=> {
                   e.preventDefault()

                   console.log({email, password})
            }}>
              <input type="email" placeholder="beth@uwa.byi" value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
              <input type="password" placeholder="secret" value={password} onChange={(e)=> setPassword(e.currentTarget.value)}/>
              <Button type="submit" text="Submit"/>
            </form>
        </LayoutOne>
    )

}