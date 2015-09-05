import rump from 'rump'
import {rebuild} from './configs'

rump.on('update:main', () => {
  rebuild()
  rump.emit('update:server')
})

rump.on('gulp:main', (...args) => {
  require('./gulp')
  rump.emit('gulp:server', ...args)
})

Reflect.defineProperty(rump.configs, 'pushserve', {
  get: () => rump.configs.main.server.pushserve,
})
