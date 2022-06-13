import NavTwo from "../components/NavTwo"
import LayoutTwo from "../layout/LayoutTwo"

export default function CreateTutorial() {
    return (
        <LayoutTwo>
            <h1>Add a tutorial</h1>
            <form onSubmit={async =>{}}>
            <input type="text" placeholder="eg:Mathematics" />
            <textarea name="description" id="" cols="50" rows="10">Tutorial Description</textarea>
            <button type="submit">Submit</button>
            </form>
        </LayoutTwo>

    )
}