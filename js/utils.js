/*------ Function that gets the day number of the date -------*/
const getNumberDayOfTheYear = (date) => {
    let dates = new Date(date);
    const startOfTheYear = new Date(dates.getFullYear(), 0, 1);
    let dateDifference = dates - startOfTheYear;
    return Math.ceil(dateDifference / (1000 * 60 * 60 * 24));
}