const { tick, clip } = require('thrum')

tick([
  clip('xxxx', ['C5'], {channel: 0}),
  clip('x-x-', ['C5'], {channel: 5}),
  clip('[xx][xx][xx][xx][xx][xx][xx][xx][xx][xx][xx][xx][xx][xx][xx][x[xxxx]]', ['C5'], {channel: 4, velocity: 10}),
  clip('[x-x]x[xx]xx-[xx]-[xxx]-[xx]-x-[xx][xxxx][x-x]-[xx]-x-[xxxx][xxxx]', ['C3', 'C2', 'C3', 'C2', 'E2', 'G2', 'C3'], {channel: 7})
])
