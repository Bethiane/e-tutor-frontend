export default function IconContainer(props){
    return(
        <section>
            <div className={`${props.className}`}>
                <img src={`/assets/icons/${props.path}`} alt={props.alt} />
            </div>
        </section>
    ) 
}