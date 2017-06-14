'use strict'

import { CMCC, CTCC, CUCC, Location, Operator, queryLocation, queryOperator } from '../src/index'

describe('operator', () => {
  test('invalid', async () => {
    const operator = await queryOperator('138169')
    expect(operator).toBeNull()
  })

  test('virtual network operator', async () => {
    const operator = await queryOperator('17010000000')
    expect(operator).toBeNull()
  })

  test('cmcc', async () => {
    const operator = await queryOperator('13816931046')
    expect(operator).toBe(CMCC)
  })

  test('cucc', async () => {
    const operator = await queryOperator('13000281234')
    expect(operator).toBe(CUCC)
  })

  test('ctcc', async () => {
    const operator = await queryOperator('18021070048')
    expect(operator).toBe(CTCC)
  })
})

describe('location', () => {
  test('invalid', async () => {
    const location = await queryLocation('138169')
    expect(location).toBeNull()
  })

  test('上海', async () => {
    const location = await queryLocation('1802107')
    expect(location.toShort()).toEqual('上海')
  })
})
