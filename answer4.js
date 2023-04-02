// no 4
// 4. Masukan nama Anda di objek users tanpa mengubah objek users asli
import { users } from "./challenge.js";

export const answer4 = () => {
    let updatedUsers = { ...users } // use spread operator

    updatedUsers["husen"] = {
        email: "husen@gmail.com",
        skills: ["Java", "PHP", "JavaScript", "HTML", "CSS"],
        age: 25,
        isLoggedIn: true,
        points: 100,
    };    

    console.log(updatedUsers,'\n');
}