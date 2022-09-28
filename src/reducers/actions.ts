import { Cycle } from "../contexts/CyclesContext"


export enum ActionTypes {
  CREATE_NEW_CYCLE = "CREATE_NEW_CYCLE",
  FINISH_CURRENT_CYCLE = "FINISH_CURRENT_CYCLE",
  EMPTY_CYCLES = "EMPTY_CYCLES",
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function finishCurrentCycleAction(userGuess: string) {
  return {
    type: ActionTypes.FINISH_CURRENT_CYCLE,
    payload: {
      userGuess,
    },
  }
}

export function emptyCyclesAction() {
  return {
    type: ActionTypes.EMPTY_CYCLES,
  }
}
