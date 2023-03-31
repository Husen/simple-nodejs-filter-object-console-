// no 2
// 2. Hitung pengguna yang login, hitung pengguna yang memiliki lebih dari dan sama dengan 50 poin dari objek users
import { users } from "./challenge.js";

export const answer2 = () => {
    let highPointUsers = 0
    let userName = []

    for (let user in users) {
        if (users[user].isLoggedIn) {
            if (users[user].points >= 50) {
                highPointUsers++
                userName.push(user)
            }
        }
    }

    console.log(`There are ${highPointUsers} users with 50 or more points and already logged in. [ User name : ${userName.join(", ")} ] \n`)
}