# This set of experiments are based on weird results obtained from the JavaScript console

#### Some console outputs may look like they have absolutely no sense, but we need to see them from another perspective.

## 3 < 2 < 1  returns true

<img scr="" >

This case is particularly interesting. At first it looks like a bug, but if we read deeply the "<" operator, we can catch that it works as "Left-to-right".

Therefore, 

<img scr="" >

As a result, 3 < 2 < 1 is equal to 0 < 1, which indeed is true.
