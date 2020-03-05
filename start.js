const { tick, ops } = require('thrum')
tick(input => {
  let actions = []
  let notes = ['C3', 'C2', 'F2', 'G3', 'E2', 'G#2', 'F3', 'E2', 'G2', 'E3']
  ops.clock(input, '8n', 10).on(({count, mod}) => {
    let velocity = ops.sawtooth(count, mod, 7, 127)
    let note = notes[count % ((notes.length))]
    actions.push(['toMidi', {note, velocity}])
  })
  ops.clock(input, '4n', 22).on(({count, mod}) => {
    let velocity = ops.sawtooth(count, mod, 7, 90)
    let note = notes[count % ((notes.length))]
    actions.push(['toMidi', {note, velocity, channel: 1, length: 50}])
  })
  return {actions}
})
