// no 5
// 5. Dapatkan semua kunci atau properti objek user
import { users } from "./challenge.js";

export const answer5 = () => {
    let userKeys = Object.keys(users);

    console.log(userKeys);
}