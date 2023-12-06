function* fetchNextElement(){
      const x = 10;
      yield 11;
      console.log("Entering after the yield");
      const y = x + (yield 30);
      console.log("The value if y is",y);
}

const iter = fetchNextElement();

console.log("First",iter.next());

console.log("Second",iter.next());


/*

Explanation :->

Line 9 :-> When we call fetchNextElement(). This will return us an `Iterator` and the Generator function will not be executed unless iter.next() is called.

Line 11 :-> We call `iter.next`. So we go inside the function fetchNextElement(). We make a variable x = 10. Line 3 (yield 11).
We temporarily return from that yield statement and land in line 11. We print "First {value : 11, done : false}"

Line 13 :-> We call `iter.next()`. So we go inside the function fetchNextElement(). We print "Entering after the yield". We make a variable y = x (which is 10) + (yield 30). So again we return from this statement and the value of y has not been calculated yet. It is undefined as of now. We come to line 13 and we print "Second {value : 30, done : false}".

Since we are not making other iter.next() calls none of the statements after line 5 is going to resume.

*/