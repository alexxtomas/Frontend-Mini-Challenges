export const TOAST_TYPES = [
  {
    name: 'Success',
    color: 'bg-green-400',
    symbol: '✓'
  },
  {
    name: 'Error',
    color: 'bg-red-400',
    symbol: '✗'
  },
  {
    name: 'Warning',
    color: 'bg-orange-400',
    symbol: '⚠'
  },
  {
    name: 'Info',
    color: 'bg-yellow-100',
    symbol: 'ⓘ'
  }
]

export const SELECTS = [
  {
    name: 'Side',
    options: ['Left', 'Right'],
    defaultValue: 'Left'
  },
  {
    name: 'Position',
    options: ['Top', 'Bottom'],
    defaultValue: 'Top'
  },
  {
    name: 'Type',
    options: TOAST_TYPES.map(({ name }) => name),
    defaultValue: TOAST_TYPES[0].name
  }
]
