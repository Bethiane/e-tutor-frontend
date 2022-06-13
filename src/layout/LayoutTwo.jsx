import BigLeftNav from "../components/BigLeftNav";
import LeftNav from "../components/LeftNav";
import NavTwo from "../components/NavTwo";

export default function LayoutTwo(props) {
    return (
        <section>
            <NavTwo/>
            <LeftNav/>
            <BigLeftNav/>
            <div>{props.children}</div>
        </section>

    )
}