import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.loggerService = loggerService
    }

    add(user) {
                    users.push(user)
                    this.loggerService.log(user)
    }

    list() {
        return users
    }

    getUserById(id) {
        return users.find(u=>u.id ===id)
    
    }

}