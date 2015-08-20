import gulp from 'gulp'
import pushserve from 'pushserve'
import rump from 'rump'

const name = ::rump.taskName,
      task = ::gulp.task,
      {configs} = rump

task(name('server'), [name('watch')], done => {
  pushserve(configs.pushserve, done)
})
task(name('server:prod'), [name('prod:setup'), name('server')])
