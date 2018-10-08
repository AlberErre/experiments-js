## Experiments based on weird results obtained from JavaScript console

Some console outputs may look like they have absolutely no sense, but we need to see them from another perspective.

## 3 < 2 < 1 returns true

<img src="../console.png" >

This case is particularly interesting.
At first this may look like a bug, but if we read deeply the `<` operator definition, we can catch that it works as `Left-to-right`.

As a result, `3 < 2 < 1` is equal to `0 < 1`, which indeed is <strong>true</strong>.
