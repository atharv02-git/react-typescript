export type LoginProps = {
    movieName: string
}

export const Login = ({movieName}: LoginProps) => {
    return(
        <div>
            This is Login Component. Favourite Movie series is {movieName}
        </div>
    )
}