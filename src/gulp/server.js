import gulp from 'gulp'
import pushserve from 'pushserve'
import rump from 'rump'

const name = ::rump.taskName
const task = ::gulp.task
const {configs} = rump

task(name('server'), [name('watch')], done => {
  pushserve(configs.pushserve, done)
})
task(name('server:prod'), [name('prod:setup'), name('server')])
