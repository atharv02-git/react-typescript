// as children component is another React component closed inside parent (Oscar) component
type OscarProps = {
    children : React.ReactNode
}

export function Oscar(props: OscarProps) {
    return (
        <div>
            {props.children}
        </div>
    )
}
