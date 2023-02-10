type GreetProps = {
    name: string
    messageCount: number
}

export const Greet = (props: GreetProps) => {
    return(
        <div>
            <h2>Welcome to the page {props.name}</h2>
            <h2>{props.messageCount }</h2>
        </div>
    )
}