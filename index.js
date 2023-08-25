const readlineSync = require("readline-sync")

var tampungHarga = 0

function main() {
    // IQBAL PUTRA YOTTI 1222409
   let about = readlineSync.question("(1)Start atau (2)about :")
      if (about == 2){
         console.log("Di buat oleh : \nLAODE SAADY 1221027\nIQBAL PUTRA YOTTI 1222409")
         main()
      }else if (about == 1){
         console.log("================================")
    console.log("SELAMAT DATANG DI RESTORANT KAMI")
    console.log("================================")
         console.log("Silahkan pilih menu (1)Minum dan (2)Makan")
    let menu = readlineSync.question("Silahkan input menu :")

    if(menu == 1 ){
        minum()
    }else if (menu == 2){
        makan()
    }else {
        console.log("Daftar Menu Tidak Tersedia")
        // let err = readlineSync.question("Silahkan Input Ulang (1)Minum dan (2)Makan")
        // if (err == 1){
        //     minum()
        // }else if(err == 2){
        //     makan()
        // }
        main()
    }
   }else{
      console.log("")
      console.log("Inputkan Ulang")
      main()
   }
}
main()

function makan(){
   console.log("=========================")
    console.log("LIST DAFTAR MENU MAKAN")
   console.log("=========================")
    console.log("1.Nasi Goreng : Rp.15,000")
    console.log("2.Soto Ayam : Rp.20,000")
    console.log("3.Mie Goreng : Rp.15,000")
    console.log("4.Mie Ayam : Rp.15,000")
    console.log("5.Bakso : Rp.15,000")
    console.log("6.Sate Ayam : Rp.25,000")
    console.log("7.Ketoprak : Rp.15,000")
    console.log("8.Tela-Tela : Rp.10,000")
    console.log("9.Pempek : Rp.30,000")
    console.log("10.Ayam Cabe Ijo : Rp.20,000")

    let inputmakan = readlineSync.question("Silahkan Pilih Makan : ")

    switch (inputmakan) {
         case "1":
            console.log("===========")
            console.log("Nasi Goreng")
            console.log("===========")
            tampungHarga += 15000
            break;
         case "2": 
            console.log("===========")
            console.log("Soto Ayam")
            console.log("===========")
            tampungHarga += 20000
            break
         case "3": 
            console.log("===========")
            console.log("Mie Goreng")
            console.log("===========")
            tampungHarga += 15000
            break
         case "4": 
            console.log("===========")
            console.log("Mie Ayam")
            console.log("===========")
            tampungHarga += 15000
            break
         case "5": 
            console.log("===========")
            console.log("Bakso")
            console.log("===========")
            tampungHarga += 15000
            break
         case "6": 
            console.log("===========")
            console.log("Sate Ayam")
            console.log("===========")
            tampungHarga += 25000
            break
         case "7": 
            console.log("===========")
            console.log("Ketoprak")
            console.log("===========")
            tampungHarga += 15000
            break
         case "8": 
            console.log("===========")
            console.log("Tela-Tela")
            console.log("===========")
            tampungHarga += 10000
            break
         case "9": 
            console.log("===========")
            console.log("Pempek")
            console.log("===========")
            tampungHarga += 30000
            break
         case "10": 
            console.log("===========")
            console.log("Ayam Cabe Ijo")
            console.log("===========")
            tampungHarga += 20000
            break
         default:
            makan()
            break;
        }
    let makanan = readlineSync.question("Apakah Mau Pesan Lagi (y)/(t): ");

    if (makanan === "y") {
        makan();
    } else {
        let konfirmasi = readlineSync.question("Apakah Mau pesan minum atau tidak (y)/(t) :")
         if (konfirmasi == "y"){
            minum()
         }else{
            hitung()
         }
    }

}

function minum(){
   console.log("=========================")
   console.log("LIST DAFTAR MENU MINUMAN")
   console.log("=========================")
    console.log("1.Teh Manis : Rp.5,000")
    console.log("2.Cappucino : Rp.10,000")
    console.log("3.Air Hangat : Rp.2,000")
    console.log("4.Teh Tarik : Rp.10,000")
    console.log("5.Jus Mangga : Rp.15,000")
    console.log("6.Susu Panas : Rp.7,000")
    console.log("7.Kopi O : Rp.8,000")
    console.log("8.Kopi Susu : Rp.8,000")
    console.log("9.Lemon Tea : Rp.9,000")
    console.log("10.Jus Orange : Rp.15,000")

    let inputMinum = readlineSync.question("Silahkan Pilih Minum : ")
    

    switch (inputMinum) {
         case "1":
            console.log("===========")
            console.log("Teh Manis")
            console.log("===========")
            tampungHarga += 5000
            break;
         case "2": 
            console.log("===========")
            console.log("Cappucino")
            console.log("===========")
            tampungHarga += 10000
            break
         case "3":
            console.log("===========")
            console.log("Air Hangat")
            console.log("===========")
            tampungHarga += 2000
            break
         case "4":
            console.log("===========")
            console.log("Teh Tarik")
            console.log("===========")
            tampungHarga += 10000
            break
        case "5":
            console.log("===========")
            console.log("Jus Mangga")
            console.log("===========")
            tampungHarga += 15000
            break
         case "6":
            console.log("===========")
            console.log("Susu Panas")
            console.log("===========")
            tampungHarga += 7000
            break
         case "7":
            console.log("===========")
            console.log("Kopi O")
            console.log("===========")
            tampungHarga += 8000
            break
         case "8":
            console.log("===========")
            console.log("Kopi Susu")
            console.log("===========")
            tampungHarga += 8000
            break
         case "9":
            console.log("===========")
            console.log("Lemon Tea")
            console.log("===========")
            tampungHarga += 9000
            break
         case "10":
            console.log("===========")
            console.log("Jus Orange")
            console.log("===========")
            tampungHarga += 15000
            break
         default:
            makan()
            break;
        }

        let Minuman = readlineSync.question("Apakah Mau Pesan Lagi (y)/(t): ");

    if (Minuman === "y") {
        makan();
    } else {
        let konfirmasi = readlineSync.question("Apakah Mau pesan makan atau tidak (y)/(t) :")
         if (konfirmasi == "y"){
            minum()
         }else{
            hitung()
         }
    }
}

function hitung(){
   console.log("=====================================")
   console.log(`Total Belanjaan Anda : Rp.${tampungHarga}`)
   let uang = readlineSync.question("Inputkan Uang Anda : Rp.")
   let total = uang - tampungHarga 
   if(uang < tampungHarga){
      console.log(`Uang Anda Kurang ${total} Silahkkan Input Ulang`)
      hitung()
   }else{
      console.log(`Hasil Kembalian Anda : Rp.${total}`)
      console.log("")
      console.log("=====================================")
      console.log("TERIMA KASIH")
      console.log("=====================================")
      main()
   }
}

