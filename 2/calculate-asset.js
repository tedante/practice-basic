//mendapatkan nama asset
//input => 'rumah2'
//output => 'rumah'
function findAssetName(str) {
    
}

// menghitung jumlah pajak dari 1 aset
// input => harga aset => 2000000
//       => pajak => 2
// output => 40000 (didapat dari (harga aset * pajak / 100) )
function calculateTax(price, tax) {
    
}

// koversi number menjadi rupiah
// input => 2357000000
// output => Rp 2.357.000.000,00
function numberToRupiah(num) {
    
}

//total pajak
function totalTax(obj) {
    // isinya nama asset yang wajib bayar pajak dan berapa persen yang harus dibayar dari harga asset
    let taxList = [
        ['rumah', 2],
        ['mobil', 5],
        ['motor', 10],
        ['tanah', 2]
    ]
    //panggil findAssetName disini
    //panggil numberToRupiah disini
}


// daftar asset yang dimiliki terdiri dari nama asset dan harga aset
let data = {
    owner: 'Anton',
    assets: [
        ['rumah1', 6000000000],
        ['rumah2', 1000000000],
        ['rumah3', 800000000],
        ['rumah4', 400000000],
        ['mobil1', 1200000000],
        ['mobil2', 125000000],
        ['mobil3', 500000000],
        ['laptop1', 19000000],
        ['laptop2', 30000000],
        ['sepeda1', 12000000]
    ]
}


console.log(totalTax(data)); //Rp 255.250.000,00
// hitung total pajak yang harus dibayar dan dijadikan format rupiah
// perhatikan requirement input dan output dari setiap function harus sesuai