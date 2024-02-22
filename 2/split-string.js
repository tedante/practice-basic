// split string menjadi array
// input => 'kentang goreng keju'
// output => ['kentang', 'goreng', 'keju']
function manualSplit(str) {
}

//Pencarian sesuai kata yang diinputkan
// input => 'goreng'
// output => ['minyak goreng', 'mie goreng', 'kentang goreng', 'kentang goreng keju']
function search(arr, keyword) {
    //panggil manual split dan sesuaikan parameternya
}

let products = {
    list: [
        'minyak goreng', // ['minyak', 'goreng']
        'mie rebus',  // ['mie', 'goreng']
        'mie goreng', 
        'mie pedas', 
        'sirup jeruk', 
        'sirup mangga', 
        'kentang goreng', 
        'kentang goreng keju', 
        'keju slice', 
        'keju parut keju'
    ]
}

// panggil function disini dan sesuaikan parameternya
console.log(search(products, 'keju')); // ['kentang goreng keju', 'keju slice', 'keju parut keju']
// perhatikan requirement input dan output dari setiap function harus sesuai