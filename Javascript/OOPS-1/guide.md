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