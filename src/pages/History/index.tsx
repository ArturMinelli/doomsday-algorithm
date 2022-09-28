import { HistoryContainer, HistoryList, Status, TitleContainer } from './styles'
import { formatDistanceToNow, differenceInMilliseconds } from 'date-fns'
import { formatDate, weekdaysInfo } from '../../utils/DateGenerator'
import { useCycles } from '../../hooks/useCycles'
import { millisecondsToSeconds } from '../../utils/millisecondsToSeconds'
import { formatSecondsAndMilliseconds } from '../../utils/formatSecondsAndMilliseconds'
import { Trash } from 'phosphor-react'

export function History() {
  const { cycles, emptyCycles } = useCycles()

  function handleEmptyCycles() {
    emptyCycles()
  }

  return (
    <HistoryContainer>
      <TitleContainer>
        <h1>History</h1>
        <button>
          <Trash onClick={handleEmptyCycles} size={20} />
        </button>
      </TitleContainer>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weekday</th>
              <th>Your guess</th>
              <th>Started at</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
              cycles.map((cycle) => {
                if(cycle.duration && cycle.userGuess) {
                  const userGuessInt = parseInt(cycle.userGuess)
                  const userGuess = weekdaysInfo[userGuessInt]
                  const weekday = weekdaysInfo[cycle.weekday.day]
                  const userGuessedCorrectly = weekday === userGuess

                  return (
                    <tr key={cycle.id}>
                      <td>{formatDate(cycle.randomDate)}</td>
                      <td>{weekday}</td>
                      <td>{userGuess}</td>
                      <td>{formatDistanceToNow(new Date(cycle.startDate), {
                          addSuffix: true,
                        })}
                      </td>
                      <td>{formatSecondsAndMilliseconds(millisecondsToSeconds(cycle.duration))}</td>
                      <td>{userGuessedCorrectly ? "Correct" : "Incorrect"}</td>
                    </tr>
                  )
                }
              })
            }
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

