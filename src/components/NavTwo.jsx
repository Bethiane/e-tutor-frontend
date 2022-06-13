import IconContainer from "./IconContainer";

export default function NavTwo() {
    return (
        <section>
            <nav>
                <div className="logo">
                    e-Tutor
                </div>
                <div>
                    <input type="text" placeholder="Search for a tutorial" />
                </div>
                <div className="accessibility">
                 <IconContainer path="dark-mode.png"/>
                 <IconContainer path="notifications.png"/>
                 <IconContainer path="user.png"/>

                </div>
            </nav>

        </section>

    )
}