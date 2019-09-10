//proses pemanggilan library fs
const fs = require('fs')

console.log('start reading a file...')

//proses readfile text.txt menggunakan library fs
fs.readFile('terserah.txt', 'utf-8', (err, content)=>{
    //untuk handle error
    if (err) {
        console.log('error happened during reading the file')
        return console.log(err)
    }

    //lakukan sesuatu disini kalau berhasil

    //console.log("yeay, berhasil! Datanya bro: " +content);

    //jika berhasil rename text.txt ke terserah.txt
    fs.rename('terserah.txt', 'terserah2.txt', (err) =>{
        if (err) console.log("gagal rename!"+err);
        console.log("Berhasil")
    })
})

console.log('end of the file')