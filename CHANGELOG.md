# Changelog

### 0.8.0
- Make use of `babel-runtime`
- Display in info task if pushState is on

### 0.7.0
- Use Babel fully for ES2015+
- Replace JSHint with ESLint
- Add code coverage support
- Update packages
- Rewrite tests with ES2015+ and should.js
- **BREAKING** Turn off pushState by default

#### 0.6.1
- Add option to toggle pushState on or off

### 0.6.0
- **BREAKING** Drop BrowserSync (into its own module) in favor of pushserve
- Update to match Rump 0.6.0 (pass options)
- Update `require-all`

### 0.5.0
- Update to match Rump 0.5.0 (use same minor version)

### 0.4.0
- Update to match Rump 0.4.0 (use `npm dedupe`)

#### 0.3.1
- Add pushState support

### 0.3.0
- Update to match Rump 0.3.0

#### 0.2.4
- Add ability to override defaults for watching in BrowserSync

#### 0.2.3
- Add port number information to info task
- Fix info task (it was set to `rump:info:static`)

#### 0.2.2
- Go back to `rump:server`, remove `rump:serve`

#### 0.2.1
- Add `rump:info` task
- Add `rump:serve` task as an alternate name to `rump:server`

### 0.2.0
- Initial alpha version
