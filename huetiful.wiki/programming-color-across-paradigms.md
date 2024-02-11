## Programming color across paradigms

As developers we come from different technical experiences/preferences. In this wiki, I'll show some ways we can make use of this library more intuitive.

### A function oriented API with a hint of method chaining

huetiful-js tries to maintain the original approach of a function oriented API like Culori, the library it builds on. So for those who fancy FP we can pull stunts like this with our code and still look good:

#### Are you functional ?

```js



```

Okay, so maybe the last example was overkill but, the sky's the limit in programming.

#### Read-Manipulate-Output chains

Luckily, for us the library has two lazy chains akin to the popular `_.chain` method in the Lodash library. TThese two chains are actually classes `Color` and `ColorArray`.

##### `Color` chain (or classs)

The `Color` class has all the functions that take a single color as the first parameters as methods. If the function returns a color token (hex string,color array, color object specifically), will return `this` or a reference to the host object which is our `Color` in this case:


```js



```


##### `ColorArray`

The `ColorArray` class has all methods that take an array as the first parameter as methods for example the `sortBy` and `filterBy` module:


```js




```

Feel free to mix and match your coding style. After all, coding is an art.   

 