// uncomment (1) or (2) to reproduce

import foo from './foo'

foo()

// next line causes error (1)
// import brother from 'brother/brother'

// isn't working either (2)
// import brother from 'buns/brother/brother'

import path from 'path'

// console.log(path.join('a', 'b'))
