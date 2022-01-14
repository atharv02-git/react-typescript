type StatusProps = {
    status: 'loading'| 'success' | 'error' //union of string literals
}

export function StatusProps(props: StatusProps) {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    }else if(props.status === 'success'){
        message = 'Data fetched successfully!'
    }else if(props.status === 'error'){
        message = 'Something went wrong!'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}
