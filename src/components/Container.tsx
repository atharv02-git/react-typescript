import { useContext } from "react"
import { ThemeContext } from './contexts/ThemeContext'

type ContainerProps = {
    styles: React.CSSProperties
}

export function Container(props: ContainerProps) {
    const theme = useContext(ThemeContext)
    return (
        <div style={{background: theme.primary.main, color: theme.primary.text}}>
            Text goes in here
        </div>
    )
}
