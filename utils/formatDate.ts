export const formatDate = (date: string): string => {
  const dateTime = new Date(date);

  return dateTime.toLocaleDateString();
}