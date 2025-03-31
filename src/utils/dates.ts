export const formatShortDate = (dateString: string): string => {
    const [year, month, day] = dateString.split('-').map(Number);
    const utcDate = new Date(Date.UTC(year, month - 1, day));
    const formattedDay = String(utcDate.getUTCDate()).padStart(2, '0');
    const formattedMonth = String(utcDate.getUTCMonth() + 1).padStart(2, '0');
    const formattedYear = String(utcDate.getUTCFullYear()).slice(2);
    
    const formatedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`
    
    return formatedDate;
  };
  
  export const formatDateBasedOnFrequency = (frequency: string): string => {
    const date = new Date();
    if (frequency === 'WEEKLY') {
      date.setDate(date.getDate() - 7);
    } else if (frequency === 'MONTHLY') {
      date.setMonth(date.getMonth() - 1);
    }

    const formatedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(2)}`
    return formatedDate;
  };