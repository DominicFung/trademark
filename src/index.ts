import source from './source.json'

export default class TM {
  constructor() { Object.assign(this) }

  isTrademarked(s: string):boolean {
    return source.words.includes(s.toLowerCase())
  }

  hasTrademarkWords(s: string):boolean {
    let st = s.split(/ *" *| *' *|'s |\n|\r|\n\r| /g)
    console.log(st)
    for (const v of st) {
      if (source.words.includes(v.toLowerCase())) return true
    }
    return false
  }
}