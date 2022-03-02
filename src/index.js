// This file collects the core modules that are required to run the app
// Think of it as the top-level container of the 

import {init as startApp} from './mvc/controller'

function main() {
  try {
    startApp()
  } catch(err) {
    console.error(err)
  }
}

main()