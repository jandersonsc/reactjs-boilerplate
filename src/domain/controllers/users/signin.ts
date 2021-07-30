import { SignInDTO } from '../../repositories/users/signin/signin.dto'
import { SignInRepository } from '../../repositories/users/signin/signin'

export class SignInController {

    constructor(private data: SignInDTO) {}

    async handle() {
        const repository = new SignInRepository(this.data)
        const response = await repository.handle()
        
        if (!response.user) {
            console.log('Falha ao realizar login')
            return
        }

        const { displayName, photoURL, uid } = response.user
    }

}