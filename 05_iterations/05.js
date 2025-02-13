// NOTE : -> for-each do not return the values,
// that's why we use filter(), this is almost same like for-each


const Mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums = Mynums.filter( (num) => num > 4  ) // here we using parenthesis
console.log(newNums);


// using scope{}, if we use scope then we need to mention the "return" keyword
const Numbers = [1,2,3,4,5,6,7,8,9,10]
const new_Numbers = Mynums.filter( (num) => {
    return num > 5;
}  ) // here we using scope
console.log(new_Numbers);
// if we don't use the return keyword, then it's return empty array



// real world example of filter()
const Books = [
    {title: 'Book1', genre: 'Non-Fiction', publish: '1981', edition: '1989'},
    {title: 'Book2', genre: 'History', publish: '1990', edition: '1995'},
    {title: 'Book3', genre: 'Physics', publish: '1995', edition: '2000'},
    {title: 'Book4', genre: 'Mathematics', publish: '2000', edition: '2003'},
    {title: 'Book5', genre: 'Literature', publish: '2005', edition: '2010'},
    {title: 'Book6', genre: 'Philosophy', publish: '2010', edition: '2012'},
    {title: 'Book7', genre: 'Art', publish: '2012', edition: '2015'},
    {title: 'Book8', genre: 'Technology', publish: '2016', edition: '2020'},
    {title: 'Book9', genre: 'Psychology', publish: '2020', edition: '2023'},
    {title: 'Book10', genre: 'History', publish: '2023', edition: '2025'},
    {title: 'Book11', genre: 'Art', publish: '2025', edition: '2028'}
  ]
  
let userBooks = Books.filter( (bk) => bk.genre === "Art");
let filterBooks = Books.filter( (bk) => bk.edition >= 2023 )

console.log(userBooks);
console.log(filterBooks);
