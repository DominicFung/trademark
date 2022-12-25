// const source = [


//   "butterfree", "bulbasaur", "charmander", "charmeleon", "pikachu" , "squirtle", "metapod",
//   "cinderella", "dumbo", "woody", "simba", "mowgli", "rapunzel", /buzz *light *year/g
// ]

const source = {
  pokemon: {
    "Pikachu": "pikachu",
    "Eevee": "eevee",
    "Charzard": "charzard",
    "Snorlax": "snorlax",
    "Garchomp": "garchomp",
    "Lucario": "lucario",
  },
  disney: {
    "Mickey Mouse": /mickey *mouse/g
  }
} as { [c: string]: { [k: string]: string|RegExp } }

export default class TM {
  constructor() { Object.assign(this) }

  isTrademarked(s: string): boolean {
    const tmp = s.toLowerCase()
    for (const category of Object.keys(source)) {
      for (const tm of Object.keys(source[category])) {
        if (tmp.split(source[category][tm]).length >= 2) return true
      }
    }
    return false
  }

  getTrademarks(s: string): string[] {
    let t = [] as string[]
    const tmp = s.toLowerCase()
    for (const category of Object.keys(source)) {
      for (const tm of Object.keys(source[category])) {
        if (tmp.split(source[category][tm]).length >= 2) t.push(tm)
      }
    }
    return t
  }
}