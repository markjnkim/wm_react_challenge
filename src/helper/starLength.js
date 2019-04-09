import get from "lodash.get";

export const convertMilTime = (hoursSec) => {
  const hours = parseInt(hoursSec.split(":")[0]);
  const isBeforeNoon = hoursSec.includes("am");
  if (hours === 12 && isBeforeNoon) {
    return 24;
  }
  else if (isBeforeNoon || (!isBeforeNoon && hours === 12)) {
    return hours;
  }
  return hours + 12;
}

export const operation = (listing, day, action) => {
  return get(listing, `business_hours.${day}.${action}`);

}

export const isOpen = (listing, today) => {
  const day = today.getDay();
  const hours = today.getHours();
  switch (day) {
    case 0:
      const sundayOpen = operation(listing, 'sunday', 'open');
      const sundayClosed = operation(listing, 'sunday', 'close')
      if (hours > convertMilTime(sundayOpen) && hours < convertMilTime(sundayClosed)) {
        return 'OPEN NOW'
      }
      return 'CLOSED'

    case 1:
      const mondayOpen = operation(listing, 'monday', 'open');
      const mondayClosed = operation(listing, 'monday', 'close')
      if (hours > convertMilTime(mondayOpen) && hours < convertMilTime(mondayClosed)) {
        return 'OPEN NOW'
      }
      return 'CLOSED'

    case 2:
      const tuesdayOpen = operation(listing, 'tuesday', 'open');
      const tuesdayClosed = operation(listing, 'tuesday', 'close')
      if (hours > convertMilTime(tuesdayOpen) && hours < convertMilTime(tuesdayClosed)) {
        return 'OPEN NOW'
      }
      return 'CLOSED'

    case 3:
      const wednesdayOpen = operation(listing, 'wednesday', 'open');
      const wednesdayClosed = operation(listing, 'wednesday', 'close')
      if (hours > convertMilTime(wednesdayOpen) && hours < convertMilTime(wednesdayClosed)) {
        return 'OPEN NOW'
      }
      return 'CLOSED'

    case 4:
      const thursdayOpen = operation(listing, 'thursday', 'open');
      const thursdayClosed = operation(listing, 'thursday', 'close')
      if (hours > convertMilTime(thursdayOpen) && hours < convertMilTime(thursdayClosed)) {
        return 'OPEN NOW'
      }
      return 'CLOSED'

    case 5:
      const fridayOpen = operation(listing, 'friday', 'open');
      const fridayClosed = operation(listing, 'friday', 'close')
      if (hours > convertMilTime(fridayOpen) && hours < convertMilTime(fridayClosed)) {
        return 'OPEN NOW'
      }
      return 'CLOSED'

    case 6:

      const saturdayOpen = operation(listing, 'saturday', 'open');
      const saturdayClosed = operation(listing, 'saturday', 'close')
      if (hours > convertMilTime(saturdayOpen) && hours < convertMilTime(saturdayClosed)) {
        return 'OPEN NOW'
      }
      return 'CLOSED'

    default:
      return "CLOSED";
  }
}

export const starWidth = (width) => {
  const percent = width/5*100;
  return `${percent}%`;
}