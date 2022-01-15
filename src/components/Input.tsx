import React from "react"

type InputProps = {
    value: string
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input(props: InputProps) {
    return (
        <div>
            <input value={props.value} onChange={props.changeHandler} type="text"></input>
        </div>
    )
}
