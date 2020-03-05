const { tick, ops } = require('thrum')
tick((input, actions) =>
  ops.clock(input, '8n', 22).on((count, length) =>
    actions.push(
      ['toMidi', {length, note: ops.t(count, ['C3', 'C2', 'F2', 'G3', 'E2', 'G#2', 'F3', 'E2', 'G2', 'E3'])}]
    )
  )
)
