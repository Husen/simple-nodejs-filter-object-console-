import { users } from './challenge.js'
import { answer1 } from './answer1.js'
import { answer2 } from './answer2.js'
import { answer3 } from './answer3.js'
import { answer4 } from './answer4.js'
import { answer5 } from './answer5.js'
import { answer6 } from './answer6.js'

console.log("Data Users :\n")
console.log(users)
console.log("\n============================================\n")

console.log("no 1 bang (Temukan orang yang memiliki banyak keterampilan di objek users)")
answer1() // 1. Temukan orang yang memiliki banyak keterampilan di objek users
console.log("\nno 2 bang (Hitung pengguna yang login, hitung pengguna yang memiliki lebih dari dan sama dengan 50 poin dari objek users)")
answer2() // 2. Hitung pengguna yang login, hitung pengguna yang memiliki lebih dari dan sama dengan 50 poin dari objek users
console.log("\nno 3 bang (Temukan orang yang merupakan developer stack MERN (Mongo, Express, React, Node) dari objek users)")
answer3() // 3. Temukan orang yang merupakan developer stack MERN (Mongo, Express, React, Node) dari objek users
console.log("\nno 4 bang (Masukan nama Anda di objek users tanpa mengubah objek users asli)")
answer4() // 4. Masukan nama Anda di objek users tanpa mengubah objek users asli
console.log("\nno 5 bang (Dapatkan semua kunci atau properti objek user)")
answer5() // 5. Dapatkan semua kunci atau properti objek user
console.log("\nno 6 bang (Dapatkan semua point objek user)")
answer6() // 6. Dapatkan semua point objek user
console.log()