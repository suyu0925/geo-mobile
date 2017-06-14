'use strict'

import { fromCode, Level, Location } from 'location-china'
import { CMCC, CTCC, CUCC, Operator, Type } from 'mobile-operator'

// tslint:disable-next-line
const database = require('./mobilemap.json')

export { Level, Location } from 'location-china'
export { CMCC, CTCC, CUCC, Operator, Type } from 'mobile-operator'

export function queryOperator(phone: string): Operator {
  // check if the phone number is valid
  if (!phone.match(/\d{7,11}/)) {
    return null
  }
  phone = phone.substr(0, 7)
  // ignore virtual network operators
  if (phone.startsWith('170')
    || phone.startsWith('171')) {
    return null
  }
  let result: Operator
  const info = database[phone]
  if (info) {
    if (info.operation === '中国移动网络'
      || info.operation === '中国移动数据卡') {
      result = CMCC
    } else if (info.operation === '中国联通网络'
      || info.operation === '中国联通数据卡') {
      result = CUCC
    } else if (info.operation === '中国电信网络'
      || info.operation === '中国电信卫星电话网络') {
      result = CTCC
    }
  }
  return result
}

export function queryLocation(phone: string): Location {
  // check if the phone number is valid
  if (!phone.match(/\d{7,11}/)) {
    return null
  }
  phone = phone.substr(0, 7)
  // ignore virtual network operators
  if (phone.startsWith('170')
    || phone.startsWith('171')) {
    return null
  }
  let location: Location
  const info = database[phone]
  if (info) {
    location = fromCode(info.code, Level.Province)
  }
  return location
}
