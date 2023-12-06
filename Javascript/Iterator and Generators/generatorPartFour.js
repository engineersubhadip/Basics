function* fetchNextElement(){
      const x = 10;
      console.log(yield 11);
      console.log("We are entering the after the yield");
      const y = x + (yield 30);
      console.log("The value of y is",y);
}

const iter = fetchNextElement();

console.log("First",iter.next());
console.log("Second",iter.next(74))
console.log("Third",iter.next())


/*
Explanation :->

Line 9:-> iter becomes a ITERATOR Object. And the Generator function fetNextElement() won't be
executed unless we run iter.next.

line 11 :-> We call iter.next(). So we run the GENERATOR function. We create a variable x = 10.
console.log(yield 11). Since this is a yield statement so we temporarily return from here and What do we return ? We return the yielded value as the return value for the Iterator Object.

We print First {value : 11, done : false}


line 12:-> We call iter.next(). Since, we are not passing any argument, so basically we are passing `undefined`. So we resume our running for the Generator function from line 3.

We print undefined.
We print We are entering the after the yield.

Variable y = x(which is 10) + (yield 30).

Since this is a yield statement. So we temporarily return from this line. And what do we return ? We return the yielded value as the return value for the Iterator Object.

So, we print Second {value : 30, done : false}

line 13:-> We call iter.next(). Since we are not passing anything in the argument, the default is `undefined`. We resume our operation from line 5. 

So, y = 10 + undefined -> NaN.

We print The value of y is NaN.

Since we did not encounter any other yield statement, so we print the following :->

Third {value : undefined, done: true}

*/