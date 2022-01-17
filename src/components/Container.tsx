type ContainerProps = {
    styles: React.CSSProperties
}

export function Container(props: ContainerProps) {
    return (
        <div style={props.styles}>
            Text goes in here
        </div>
    )
}
