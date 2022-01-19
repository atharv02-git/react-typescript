import { useEffect, useRef } from "react"

export function DomRef() {
    // const inputRef = useRef<HTMLInputElement>(null) or
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        // inputRef.current?.focus() or
        inputRef.current.focus()
    },[])

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}
