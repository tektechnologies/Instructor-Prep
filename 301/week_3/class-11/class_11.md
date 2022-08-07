# Good Day Happy Friday

- ## First Hour

- cover feedback
- Week two was a lot of information. Good work.
- This week is about working with data bases. 

### Warm-Up

- what is the purpose of this code.
- arr[j]
- arr[j] + 1 // these are access locations.
- How does this sort?
- 10, 7, 3, 1, 9, 7,4, 3,
- 7, 10, 3, 1, 9, 7, 4, 3
- all the way to the end 7,3,1,9,7,4,3,10
- then
- 7, 3, 1, 9, 7, 4, 3, 10
- 3, 1, 7, 9, 7, 4, 3, 10
- 3, 1, 7,  7, 9, 4, 3, 10
  then the 4 and the 3 make there way over
- 3, 1, 7,  7, 4, 3, 9,  10
- in one pass our numbers have become closer to where they want to be
- this is called a bubble sort.
- it scans the whole thing and passes the largest thing to the end.

## Code Challenge

- 6. return arr[2].items[1].quantity;

```js

const howManyTreats = (arr) => {
  let treats = 0;
  arr.forEach(obj => {
    let listArray = obje.items;
    listArray.forEach(item => {
      if(item.name === 'Treats'){
        treats = item.quantity;
      }
    });
  });
  return treats;
  };

```

- 7.

```js

const totalSum = (matrix) => {
  let totalSum = 0; 
  matrix.forEach(nestedArr => { //slower loop
    nestedArr.forEach(number => { //faster loop
      totalSum += number;
    });
  });
    return totalSum;

    return matrix.flat().reduce((preVal, current) => {
      preVal + Current;
    })
};

```

## Second Hour

- Code challenge chaining methods.

## Persistant Data

- Cache is not cash.
- Let us Data base
- Can of books is a partnered lab. 
- Start code consists of a front end and back end.
- we will create a database and retrieve data using mongoose by way
  of a data model; a schema.
- On to Atlas DB
- show how to log in and create a cluster0
- select browse selections if we have a pre-built db to look at. 
- look at how to add new users 
- look at how to get your connection link. 