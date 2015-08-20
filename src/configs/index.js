import extend from 'extend'
import rump from 'rump'

const {configs} = rump

rebuild()

export function rebuild() {
  const {PORT} = process.env
  configs.main.server = extend(true, {
    port: parseInt(PORT, 10) || 3000,
    pushState: false,
  }, configs.main.server)
  configs.main.server.pushserve = extend(true, {
    noPushState: !rump.configs.main.server.pushState,
    path: rump.configs.main.paths.destination.root,
    port: rump.configs.main.server.port,
  }, configs.main.server.pushserve)
}
