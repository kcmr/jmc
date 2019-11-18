export const runAtInterval = (callback, delay) => {
  const dateNow = Date.now;
  const requestAnimation = window.requestAnimationFrame;

  let start = dateNow();
  let stop;

  const intervalFunction = () => {
    dateNow() - start < delay || (start += delay, callback());
    stop || requestAnimation(intervalFunction);
  };

  requestAnimation(intervalFunction);
};
