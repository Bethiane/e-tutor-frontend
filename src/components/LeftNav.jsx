import IconContainer from "./IconContainer";

export default function LeftNav() {
    return (
        <section>
            <div className="left-div">
                <IconContainer className="icon-container" path="home.png" />
                <IconContainer className="icon-container" path="books.png" />
                <IconContainer className="icon-container" path="cap.png" />
                <IconContainer className="icon-container" path="analytics.png" />
                <IconContainer className="icon-container" path="settings.png" />
            </div>
        </section>
    )
}