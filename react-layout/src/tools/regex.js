export default {
  carNo:
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{5,6}$/,
  integer: /^\d+$/,
  phone: /^[1][1-9]\d{9}$/,
  percentage: /^(\d{1,2}|\d{1,2}\.\d{1,2})$|100$/, //<= 100%
  idCard:
    /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  twoDecimal: /(^\d+$)|(^\d+\.\d{1,2}$)/, //2位小数 整数
  name: /^[\u4e00-\u9fa5]{2,10}$/,
}
