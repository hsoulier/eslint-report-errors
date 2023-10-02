#! /usr/bin/env node
import { parseArgs } from "node:util"
const args = parseArgs({
  options: {
    name: {
      type: "string",
      short: "n",
    },
    verbose: {
      type: "boolean",
      short: "v",
    },
  },
})

console.log(args)
