import {
    auth
} from '../../../../services/firebase'
import {CreateUserDTO} from './create.dto'

export class CreateUserRepository {

    constructor(private data: CreateUserDTO) {}

    async handle() {
        const response = await auth.createUserWithEmailAndPassword(this.data.email, this.data.password)
        .then((response) => response.user)
        .catch((error) => error)

        return response
    }

}