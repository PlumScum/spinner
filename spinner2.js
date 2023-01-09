let animationArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let count = 100;

animationArray.forEach((element) => {
  setTimeout(() => {
    process.stdout.write(element);
  }, count);
  count = count + 300;
});
