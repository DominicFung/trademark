import { words } from './source.json'

export default class TM {
  constructor() { Object.assign(this) }

  isTrademarked(s: string):boolean {
    return words.includes(s.toLowerCase())
  }

  hasTrademarkWords(s: string):boolean {
    let st = s.split(/ *" *| *' *|'s |\n|\r|\n\r| /g)
    console.log(st)
    for (const v of st) {
      if (words.includes(v.toLowerCase())) return true
    }
    return false
  }
}