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

export const SeriesList: Series[] = [
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

export const getSeriesName = (series: Series) =>
  series === 'DDRMAX' || series === 'DDRMAX2' ? series : `DDR ${series}`

export const isSeries = (obj: unknown): obj is Series =>
  typeof obj === 'string' && (SeriesList as Array<string>).includes(obj)
