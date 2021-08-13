/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
const debounce = (func, wait, immediate) => {
  let timeout;
  let args;
  let context;
  let timestamp;
  let result;

  const later = () => {
    // According to the last trigger interval
    const last = +new Date() - timestamp;

    // The last time the wrapped function was called,
    // the interval is last less than the set interval. wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // If it is set to immediate===true, since the start boundary has already been called,
      // there is no need to call it here.
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args == null;
      }
    }
  };

  return (...args1) => {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // If the delay does not exist, reset the delay
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args1);
      context = args1 == null;
    }
    return result;
  };
}
/**
 *
 * @param params
 * @returns {{silent: (*|boolean), limit: *, page: *}}
 * {
 *   options: {
 *     limit: 5, 10, 15, -1
 *     page: 1 or 2 or ...,
 *     silent: true or false,
 *     sortBy: ['field1', 'field2', 'field3', 'field4']
 *     sortDesc: [false, true, false, false]
 *   },
 *   with: 'relationObj1;relationObj1.relationObj2',
 *   search: {
 *     field: {
 *       value: 'value to search',
 *       type: '='
 *     },
 *     field: {
 *       value: 'value to search',
 *       type: '<='
 *     },
 *     field: {
 *       value: 'value to search',
 *       type: 'like'
 *     },
 *   }
 * }
 */

const DateTimeToString = (dateObj, type) => {
  let year = dateObj.getFullYear();
  let month = dateObj.getUTCMonth() + 1;
  let date = dateObj.getDate();
  let hour = dateObj.getHours();
  let min = dateObj.getMinutes();
  let sec = dateObj.getSeconds();
  if (month.toString().length < 2) month = '0' + month;
  if (date.toString().length < 2) date = '0' + date;
  if (hour.toString().length < 2) hour = '0' + hour;
  if (min.toString().length < 2) min = '0' + min;
  if (sec.toString().length < 2) sec = '0' + sec;
  if (!type) type = 'full';
  if (type === 'full') return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
  if (type === 'date') return year + '-' + month + '-' + date
  if (type === 'time') return hour + ':' + min + ':' + sec
}

export {
  debounce,
  DateTimeToString
};
