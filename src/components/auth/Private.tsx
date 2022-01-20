import { Login } from "./Login"
import {ProfileProps} from "./Profile"
import {LoginProps} from "./Login"

type PrivateProps = {
    isLoggedin: boolean
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedin, component: Component}: PrivateProps) => {
    if(isLoggedin) {
        return <Component name='Atharv' />
    }else{
        return <Login movieName="Spiderman No Way Home"/>
    }
}