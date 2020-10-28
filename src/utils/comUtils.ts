/**
 * 时间格式转换 YYYY-MM-DD
 * @param dateObj 时间对象
 * @param type 返回时间格式
 */
export const timeFormat = (dateObj: Date, type = 'YYYY-MM-DD') => {
  const year = dateObj.getFullYear()
  const month = ('00' + (dateObj.getMonth() + 1)).slice(-2)
  const date = ('00' + dateObj.getDate()).slice(-2)
  const hours = ('00' + dateObj.getHours()).slice(-2)
  const minutes = ('00' + dateObj.getMinutes()).slice(-2)
  const seconds = ('00' + dateObj.getSeconds()).slice(-2)
  let timeString = ''

  timeString = type
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', date)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
  return timeString
}
