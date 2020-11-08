const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db



// db.serialize(() => {
//      db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name, TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//      `)
//      const query =`
//      INSERT INTO places (
//          image,
//          name,
//          address,
//          address2,
//          state,
//          city,
//          items
//      ) VALUES (?,?,?,?,?,?,?);
//  `
//     const values = [
//         "https://www.wikihow.com/images_en/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-760px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg",
//         "Teste2",
//         "Endereço 1 teste2",
//         "Endereço 2 teste2",
//         "Estado Teste2",
//         "Cidade Teste2",
//         "Opções de Coleta Teste2"
//     ]

//     function afterInsertData (err) {
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Cadastrado com Sucesso")
//         console.log(this)
//     }

//      db.run (query,values, afterInsertData)

//     //SELECTING REGISTERS
//      db.all(`SELECT * FROM places`,function(err, rows){
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//      })


//    //DELETING REGISTERS
//      db.run(`DELETE FROM places WHERE id=?`,[15], function(err) {
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Registro deletado com sucesso!")
//      })
// }) 
