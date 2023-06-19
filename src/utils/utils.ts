const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

export const getDate = (dateInISO: Date) => {
  return dateInISO.toLocaleString("en-US", options);
};

/*
 * handle debounce techniques. Here callbackFn is function passed as an argument
 * and that function contains logic to fetch data from server
 */
export const debounce = (callbackFn: any, delay: number = 1000) => {
  let timer: NodeJS.Timer;

  return function (...args: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn(...args);
    }, delay);
  };
};