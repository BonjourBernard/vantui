/* eslint-disable */
import react from 'react'
import { DatetimePicker } from '@antmjs/vantui'

export default function Demo() {
  const [state, setState] = react.useState({
    currentDate: '12:00',
    minHour: 10,
    maxHour: 20,
  })

  const onInput = react.useCallback(
    function (event) {
      setState({
        currentDate: event.detail,
      })
    },
    [state],
  )

  return (
    <DatetimePicker
      type="time"
      value={state.currentDate}
      minHour={state.minHour}
      maxHour={state.maxHour}
      onInput={onInput}
    />
  )
}