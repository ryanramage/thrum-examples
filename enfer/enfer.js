const { tick, clip } = require('thrum')

tick([
  clip('-x-x-[xx]-x-x-[xx]-x-[xxx]', ['C4']),
  clip('[xxx]xx[xxx]', ['C5', 'C5', 'C5', 'E5', 'C6', 'F5'], {channel: 12}),
  clip('--x---x---xx', ['b3'], {channel: 6}),
  clip('xxxx', ['C2'])
])
