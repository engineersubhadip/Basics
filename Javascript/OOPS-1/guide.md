1. `this` always refers to an OBJECT.

2. The value of `this` keyword wrapped inside a function depends on how the function is getting called.

If the function is getting invoked via `Direct Invocation`, then the value of `this` keyword will be `GLOBAL OBJECT`.

If the function is getting invoked via `Method Invocation`, then the value of `this` keyword will be `the parent object itself`.

3. `In Node :- Non Strict Mode :-` :-> 

console.log(this) -> Empty object

func() (Direct Invocation) -> Global Object

obj.func() (Method Invocation) -> Parent Object itself

4. `In Node :- Strict Mode :-` ->

console.log(this) -> Empty Object

func() (Direct Invocation) -> undefined

obj.func() (Method Invocation) -> Parent Object itself

5. `In Browser :- Non Strict Mode` ->

console.log(this) -> window/global Object

func() (Direct Invocation) -> window/global Object

obj.func() (Method Invocation) -> Parent Object itself

**Note**

In case of Nested Function, we are only concerned about the function inside which we are writing `this` and how that function is getting called. Not the other function which encapsulates it.