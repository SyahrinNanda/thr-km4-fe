function removeUnrelated(object, ...key){
    const newObject = object
    key.forEach((keys) => {
        delete newObject[keys]
    })
    return newObject
}

console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'address'))
console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'hobbies'));
console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'name'));


// function removeUnrelated(object, key){
//     const newObject = object
//     for(const keys of key){
//         delete newObject[keys]
//     }
//     return newObject
// }

// console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'address'))
// console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'hobbies'));
// console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'name'));