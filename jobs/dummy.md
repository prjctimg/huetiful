# v3

This rewrite was inspired by a few problems I encountered when I was trying to extend the library's functionality:

- Code bloat - Each feature introduced more variables making my code full of one-time used declarations.
- Each function had a unique parameter list meaning that I had to re explain the same information. I wasn't making sense.
- Lack of extensibility. I had no clearly defined way of interacting with the API to create custom plugins.
- Lack of a clearly defined core - I didn't know what my core functionalities were. The  so-called library was a rough collection of copy and pasted code all over the internet.


## There has a to be a less bitter poison for this

Along the way, I decided to try coding using single letter variable names and functions. The goal was to force me to reduce the number of variables I have to declare since keeping track of such cryptic identifiers. To top it off, I've taken a fancy to the destructuring assignment pattern. It feels cleaner and constrained

I know someone's gonna say something about readability but thats not the focus here. 


### Logical disjunctions and conjuctions

Basically, all conditional statements are either combinations of logical OR (||) or logical AND (&&)

> I am yet to benchmark if this has any performance hits.

Here's the before and after of `alpha.js` in v2.3.0 versus v3.0.0:

<!-- Comparison code blocks -->

