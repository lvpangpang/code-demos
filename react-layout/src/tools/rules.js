import regex from './regex'

export const rules = {
  required: { required: true, message: '必填' },
  phone: { pattern: regex.phone, message: '请正确输入手机号!' },
  twoDecimal: { pattern: regex.twoDecimal, message: '请输入整数,1位,2位小数' },
}
