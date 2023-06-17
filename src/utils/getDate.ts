const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

export const getDate = (dateInISO: Date) => {
  return dateInISO.toLocaleString("en-US", options);
};
