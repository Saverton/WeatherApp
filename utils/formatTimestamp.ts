export const formatTimestamp = (time: string): string => {
  const date = new Date(time);
  let hours = date.getHours() % 12;
  if (hours === 0) {
    hours = 12;
  }

  return `${date.getMonth() + 1}/${date.getDate()} ${hours}:00 ${date.getHours() < 12 ? 'AM' : 'PM'}`
}