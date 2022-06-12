import Nav from "../components/Nav"
import colors from "../utils/colors"


export default function LayoutOne(props) {
    return <section style={{backgroundColor: colors.white}}>
         <Nav />
         <div>{props.children}</div>
    </section>

}