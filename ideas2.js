const { tick, clip } = require('thrum')

tick([
  clip('-x-x', ['C2', 'E2']),
  clip('x-x[x-x]', ['C2', 'C2', 'E2', 'E2'], {channel: 1}),
  clip('--x-', ['C2'], {channel: 2}),
  clip('xxxxxxx[xx[xxxx]]', ['C5'], {channel: 3})
])
