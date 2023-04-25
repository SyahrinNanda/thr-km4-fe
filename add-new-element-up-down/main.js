function addNewElementUpDown(array, element, position) {
  if(position === 'up'){ 
    array.unshift(element)
    return array
  }else{
    array.push(element)
    return array
  }
}

console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, 'up'))
console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, 'down'));
console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", 'up'));
console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", 'down'))