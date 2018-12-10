import React from 'react'
import { shallow, mount } from 'enzyme'

import Board from './Board'
import { onClick } from './reducer'

const squares = ['', '', '', '', '', '', '', '', '']

describe('square component', () => {
  beforeEach(() => {
    // ignore console and jsdom errors
    jest.spyOn((window as any)._virtualConsole, 'emit').mockImplementation(() => false)
    jest.spyOn((window as any).console, 'error').mockImplementation(() => false)
  })

  it('Should render ', () => {
    const board = shallow(<Board squares={squares} onClick={onClick} />)
    expect(board.props().children.length).toEqual(3) // 3 rows
  })
})
