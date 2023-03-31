// no 6
// 6. Dapatkan semua point objek user
import { users } from "./challenge.js";

export const answer6 = () => {
    let totalPoints = Object.values(users).reduce((temp, {points}) => temp + points, 0);

    console.log(totalPoints);
}