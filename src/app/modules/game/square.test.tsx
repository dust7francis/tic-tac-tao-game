import React from 'react'
import { shallow, mount } from 'enzyme'

import Square from './Square'
import { onClick } from './reducer'

describe('square component', () => {
  beforeEach(() => {
    // ignore console and jsdom errors
    jest.spyOn((window as any)._virtualConsole, 'emit').mockImplementation(() => false)
    jest.spyOn((window as any).console, 'error').mockImplementation(() => false)
  })

  it('Should render ', () => {
    const square = shallow(<Square index={3} value="" onClick={onClick} />)
    expect(square.props().id).toEqual('3')
    expect(square.html())
      .toEqual('<button class=\"square\" id=\"3\" role=\"presentation\"></button>')
  })
})
