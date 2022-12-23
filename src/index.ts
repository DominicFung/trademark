import fs from 'fs'
import { join } from 'path'
import readline from 'readline'


const source = join(__dirname, 'source.txt')

export async function isTrademarked(s: string):Promise<boolean> {
  const rl = readline.createInterface({
    input: fs.createReadStream(source),
    output: process.stdout,
    terminal: false
  })

  for await (const line of rl) {
    if (s.toLowerCase() === line.toLowerCase()) return true
  }
  return false
}

export default {
  isTrademarked
}