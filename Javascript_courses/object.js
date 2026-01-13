
// console.log(studenty)
// console.log(studenty.address.street)
// console.log(studenty.age)
// console.log(studenty.hobbies[3])





// /*
// object has proberty and mathode
// exmple of real live microphone

// propert   mathode
        
// -name    play
// color    pause
// modal    on()
// size     of()
// */

// // object literal
// // let student={
// //     name:'abdi',
// //     class:"form one",
// //     adress:{     // objet add onother object
// //         District:"hodan",
// //         Street: 'km4',
// //         Home:"c2345"
// //     },
// //     hobbies:['football','moves','education','sweeming'], // Arry in object,

// //     age: function(){
// //         console.log('25')
// //     },
     
// // }
// // student.age()

// // console.log(student)
// // console.log(student.name)
// // console.log(student.adress)
// // console.log(student.adress.Street)
// // console.log(student.hobbies)
// // console.log(student.hobbies[0])


// // Arry you use to protect repeating variabl

// let students=[
//     {
//     name:'abdisalaam',
//     class:"form two",
//     adress:{     // objet add onother object
//         District:"hodan",
//         Street: 'km4',
//         Home:"c234566"
//     },
//     hobbies:['football','moves','education','sweeming'], // Arry in object,

//     age: function(){
//         console.log('26')
//     },
// },
// {
     


//     name:'abdinuur',
//     class:"form Three",
//     adress:{     // objet add onother object
//         District:"hodan",
//         Street: 'km5',
//         Home:"c23456"
//     },
//     hobbies:['football','moves','education','sweeming'], // Arry in object,

//     age: function(){
//         console.log('25')
//     },
     
// },
// {
    

//     name:'abdihaafid',
//     class:"form four",
//     adress:{     // objet add onother object
//         District:"gaalkacyo",
//         Street: 'km5',
//         Home:"c23456"
//     },
//     hobbies:['basketball','gym','education','swimming'], // Arry in object,

//     age: function(){
//         console.log('25')
//     },
     
// },


// ]

// // console.log(student1[0])
// // console.log(student1[1])
// // console.log(student1[1].name)
// // console.log(student1[1].adress)


// // you can use loop to prevent writing many code

//   students.forEach((student) =>{
// //    console.log(student.name)

// //     // Concatination
//     //  console.log(student.name  + student.class +student.hobbies)

//     // you can use upcoming code instead of +

//      console.log(`Name: ${student.name}  class:  ${student.class} Hobbies: ${student.hobbies}`)


//  })

// const myschool=[

//     {
//         name:'Ashkir',
//         class:'form four',
//         phone:'619537579'
//     },
//     {
//         name:'Abdisalaam',
//         class:'form four',
//         phone:'619537570'

//     },

//     {
//         name:'Ashkir',
//         class:'form four',
//         phone:'619537580'
//     }
// ]

// myschool.forEach((student)=>{

//     console.log(`name of student is ${student.name}, class is ${student.class}`)

// })

// Adding Properts

// const teem={}

// teem.Fname='Ashkir'
// teem.Sname='Muuse'

// console.log(teem)


const myschool=[

    {
       Fname:'Ashkir',
       Sname:'Faarah',
        class:'form four',
        phone:'619537579'
    },
    {
        Fname:'Abdisalaam',
        Sname:'Faarah',
        class:'form four',
        phone:'619537570'

    },

    {
        Fname:'Ashkir',
        Sname:'muuse',
        class:'form four',
        phone:'619537580'
    }
]


const fullname=(full)=>{
    return full.Fname +' '+ full.Sname
    

}
console.log(fullname(myschool[0]))
console.log(fullname(myschool[1]))







