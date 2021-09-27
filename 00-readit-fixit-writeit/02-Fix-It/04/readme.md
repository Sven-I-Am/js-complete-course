# FIX IT
## EX 04
* Why are we not seeing any tv shows? Look at the error message in the dev tools and solve it.
  * in line 24 `show.forEach(tvshows` becomes`tvshows.forEach(show`
* There is still something else going wrong. Fix this as well. 
  * in line 20 added `return` before the line