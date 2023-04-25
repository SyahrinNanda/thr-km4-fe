function addMoreData(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}
console.log(addMoreData({name: 'syahrin', umur: 20}, 'address', 'Jakarta')) 
console.log({ name: 'Edo', age: 20 }, 'hobbies', ['coding', 'reading']);
console.log({ name: 'Edo', age: 20 }, 'isMarried', false)