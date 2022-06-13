import Button from "../components/Button";
import Input from "../components/Input";
import LayoutOne from "../layout/LayoutOne";

export default function Login(){
    return(
        <LayoutOne>
            <section>
                <h3>Sign In</h3>
                <Input type="email" placeholder="ubethiane07@gmail.com" value="email"/>
                <Input type="password" placeholder="secret" value="password"/>
                <Button type="">Submit</Button>
            </section>
        </LayoutOne>
    )
}