/**
 * Terdapat sebuah array of Object dengan input seperti ini
 * 
 * [
 *  {
 *    name: 'Park Chorong',
 *    dateOfBirth: "03-03-1991",
 *  },
 *  {
 *    name: 'Yoon Bomi',
 *    dateOfBirth: "13-08-1993",
 *  },
 *  {
 *    name: 'Jung Eunji',
 *    dateOfBirth: "18-08-1993",
 *  },
 *  {
 *    name: 'Son Naeun',
 *    dateOfBirth: "10-02-1994",
 *  },
 *  {
 *    name: 'Kim Namjoo',
 *    dateOfBirth: "15-04-1995",
 *  },
 *  {
 *    name: 'Oh Hayoung',
 *    dateOfBirth: "19-07-1996",
 *  }
 * ]
 * 
 * tampilkan informasi mengenai nama dari member tersebut dan umur pada tahun ini
 * - Park Chorong berumur 30 pada tahun 2021
 * - Yoon Bomi berumur 28 pada tahun 2021
 * - Jung Eunji berumur 28 pada tahun 2021
 * - Son Naeun berumur 27 pada tahun 2021
 * - Kim Namjoo berumur 26 pada tahun 2021
 * - Oh Hayoung berumur 25 pada tahun 2021
 */

let members = [{
    name: 'Park Chorong',
    dateOfBirth: "03-03-1991",
},
{
    name: 'Yoon Bomi',
    dateOfBirth: "13-08-1993",
},
{
    name: 'Jung Eunji',
    dateOfBirth: "18-08-1993",
},
{
    name: 'Son Naeun',
    dateOfBirth: "10-02-1994",
},
{
    name: 'Kim Namjoo',
    dateOfBirth: "15-04-1995",
},
{
    name: 'Oh Hayoung',
    dateOfBirth: "19-07-1996",
}
]

console.log(showInfo(members));