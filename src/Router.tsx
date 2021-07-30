import { useContext } from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'

import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'

import { Home as HomeAdmin } from './pages/admin/Home'

export default function Router() {

    const { user } = useContext(AuthContext)

    if (user === undefined) {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-up" component={SignUp} />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact component={HomeAdmin}></Route>
        </Switch>
    )
}
