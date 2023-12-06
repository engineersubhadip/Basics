function* fetchNextElement(){
      const x = 10;
      yield 11;
      console.log("We are entering the after the yield");
      const y = x + (yield 30);
      console.log("The value of y is",y);
}

const iter = fetchNextElement();

console.log("First",iter.next());
console.log("Second",iter.next())
console.log("Third",iter.next())

/*
Explanation :->

line 9 :-> iter = fetchNextElement() . Since the function fetchNextElement() is a GENERATOR function. Therefore calling the generator function will return us an ITERATOR Object. Therefore iter is an ITERATOR object.
This also means that the GENERATOR Function will not be executed unless and until we call iter.next().

line 11:- We call iter.next(). So we run the generator function. Variable x gets 10. yield 11. Since we encounter a yield statement.
So we return from this line and yield value will be the return value for the iterator return value.

So we print First {value : 11, done : false}.

line 12:- We call iter.next(). So we resume running our GENERATOR function from line 3 onwards. Is there anything else to execute ? NO.
So we move to the next line. We print "We are entering the after the yield". We initialize a variable y = x (which is 10) + yield 30.
Since we encountered a yield statement So we will temporarily return from this line. (Mind You, the value of y is yet to be calculated).

So we print Second {value : 30, done : false}.


line 13:- We encounter iter.next(). So we resume our running our GENERATOR function from line 5 onwards. Is there anything else to execute ? YES. The value of y is yet to be calculated.
Since in the current iter.next() call we did not pass any argument. So the default argument taken is undefined. So yield 30 gets replaced with undefined.

Therefore, y = 10 + undefined => NaN.

We print "The value of Y is NaN"

We come out of the function without encountering any other yield statement. 
So we print Third {value : undefined, done : true};
*/