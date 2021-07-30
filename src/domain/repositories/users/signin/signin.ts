import {
    auth
} from '../../../../services/firebase'
import { SignInDTO } from './signin.dto'

export class SignInRepository {
    constructor(private data: SignInDTO) {}

    async handle() {
        const response = await auth.signInWithEmailAndPassword(this.data.email, this.data.password)
        .then((response) => response)
        .catch((error) => error)

        return response
    }
}