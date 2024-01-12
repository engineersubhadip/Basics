1. `Class` is a blueprint. And for that blueprint we create an object.

Eg :- `Car` is a blueprint. And using Car whenever we create an object, we get an actual `Car`.

2. Whenever we are trying to create an object for the class `X` with `new` keyword, it will automatically invoke the `constructor` function and the `constructor` function will return the object.

3. `Inheritance` the process by which one class takes properties from another class.

**Note**

How the class `teacher` is setting the properties and returning the object ?

-> We are trying to create an object from the `teacher` class.

-> The `teacher` class will automatically invoke the `constructor` corresponding to `teacher`.

-> Inside the `constructor of teacher` we are invoking the `constructor of Students`.

-> We go inside the `constructor of Student` we are invoking the `constructor of Person`.

-> We go inside the `constructor of Person` we are setting the `name and age` and return the newly created object.

-> In the same object itself we are setting the `batch` from `Student class` and returning the object from `Student class` and returning the object.

-> In the `teacher class` we are finally setting the `strength` property in the returned object from above step and returning the final object in line 36.

