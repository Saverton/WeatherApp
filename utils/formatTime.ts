export const formatTime = (time: string): string => {
  const date = new Date(time);
  let hours = date.getHours() % 12;
  if (hours === 0) {
    hours = 12;
  }

  return `${hours} ${date.getHours() < 12 ? 'AM' : 'PM'}`
}