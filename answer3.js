// no 3
// 3. Temukan orang yang merupakan developer stack MERN (Mongo, Express, React, Node) dari objek users
import { users } from "./challenge.js";

export const answer3 = () => {
    let mernUsers = []

    for (let user in users) {
        if (
            users[user].skills.includes("MongoDB") &&
            users[user].skills.includes("Express") &&
            users[user].skills.includes("React") &&
            users[user].skills.includes("Node")
        ) {
        mernUsers.push(user)
        }
    }

    console.log(`The following users have MERN stack skills: ${mernUsers.join(", ")}\n`)
}