import gulp, {tasks} from 'gulp'
import rump from 'rump'
import {green, magenta, yellow} from 'chalk'
import {version} from '../../package'

const name = ::rump.taskName,
      task = ::gulp.task,
      {configs} = rump

task(name('info:server'), () => {
  const {root} = configs.main.paths.destination,
        {port} = configs.pushserve
  let action = 'served'
  if(!configs.pushserve.noPushState) {
    action = `served ${yellow('with pushState')}`
  }
  console.log()
  console.log(magenta(`--- Server v${version}`))
  console.log(`Static files from ${green(root)} are ${action}`,
              `on port ${yellow(port)}`)
  console.log()
})

tasks[name('info')].dep.push(name('info:server'))
