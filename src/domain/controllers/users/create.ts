import { CreateUserRepository } from '../../repositories/users/create/create'
import { CreateUserDTO } from '../../repositories/users/create/create.dto'

export class CreateUserController {

    constructor(private data: CreateUserDTO) {}

    handle() {
        const repository = new CreateUserRepository(this.data)
        repository.handle()
    }

}