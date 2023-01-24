export const TOAST_TYPES = [
  {
    name: 'Success',
    color: 'bg-green-400',
    sign: '✓'
  },
  {
    name: 'Error',
    color: 'bg-red-400',
    sign: '✗'
  },
  {
    name: 'Warning',
    color: 'bg-orange-400',
    sign: '⚠'
  },
  {
    name: 'Info',
    color: 'bg-red-400',
    sign: 'ⓘ'
  }
]

export const SELECTS = [
  {
    name: 'Side',
    options: ['Left', 'Right']
  },
  {
    name: 'Position',
    options: ['Top', 'Bottom']
  },
  {
    name: 'Type',
    options: TOAST_TYPES.map(({ name }) => name)
  }
]
