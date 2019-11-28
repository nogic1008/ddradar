// Port from /types/series.ts
export type Series =
  | '1st'
  | '2ndMIX'
  | '3rdMIX'
  | '4thMIX'
  | '5thMIX'
  | 'DDRMAX'
  | 'DDRMAX2'
  | 'EXTREME'
  | 'SuperNOVA'
  | 'SuperNOVA2'
  | 'X'
  | 'X2'
  | 'X3 VS 2ndMIX'
  | '2013'
  | '2014'
  | 'A'
  | 'A20'

const SeriesList: Series[] = [
  '1st',
  '2ndMIX',
  '3rdMIX',
  '4thMIX',
  '5thMIX',
  'DDRMAX',
  'DDRMAX2',
  'EXTREME',
  'SuperNOVA',
  'SuperNOVA2',
  'X',
  'X2',
  'X3 VS 2ndMIX',
  '2013',
  '2014',
  'A',
  'A20'
]

export function isSeries(object: unknown) {
  return (
    typeof object === 'string' && (SeriesList as Array<string>).includes(object)
  )
}