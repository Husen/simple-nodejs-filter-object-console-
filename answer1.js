// no 1
// 1. Temukan orang yang memiliki banyak keterampilan di objek users
import { users } from "./challenge.js";

export const answer1 = () => {
  let maxSkills = 0
  let skillfulUsers = []

  for (let user in users) {
    let numSkills = users[user].skills.length
    
    if (numSkills > maxSkills) {
      maxSkills = numSkills
      skillfulUsers = [user]
    }
    else if (numSkills === maxSkills) {
      skillfulUsers.push(user)
    }
  }

  console.log(`[ User : ${skillfulUsers.join(", ")} ], have (${maxSkills} skills) \n`)
}