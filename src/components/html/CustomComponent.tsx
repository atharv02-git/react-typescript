import Greet from "../Greet"

//This is how we can extract the same type of prop from diff component
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return <div>{props.name}</div>
}