import React from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { IRootState } from '../../reducers'
import { onClick as cb, reset, GameState } from './reducer'
import Board from './board'
export interface IGameProps extends StateProps, DispatchProps {}

export class Game extends React.Component<IGameProps, GameState> {
  componentWillUnMount() {
    this.props.reset()
  }

  render() {
    const { isAllClicked, nextPlayer, squares, winner } = this.props
    let status = ''
    if (winner || isAllClicked) {
      status = winner
        ? `Game over! Winner is ${winner}.`
        : `Game over! 'X', 'O' draws`
      toast(status)
    } else {
      status = `Next player: ${nextPlayer}`
    }
    return (
      <div className="game">
        {isAllClicked || winner ? (
          <button
            // tslint:disable-next-line
            onClick={() => this.props.reset()}
          >
            Restart Game
          </button>
        ) : (
          ''
        )}

        <div className="game-board">
          <Board squares={squares} onClick={this.props.cb} />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ game }: IRootState) => ({
  nextPlayer: game.xIsNext ? 'X' : 'O',
  squares: game.squares,
  errorMessage: game.errorMessage,
  isAllClicked: game.isAllClicked,
  winner: game.winner
})

const mapDispatchToProps = { reset, cb }

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
