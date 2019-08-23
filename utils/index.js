export const formatPrice = (data = '') => {
  const s = data.toString()
  const regex = /\B(?=(\d{3})+(?!\d))/g
  const result = s.replace(regex, '.')
  return result
}

const color = [
  'red',
  '#87d068',
  'volcano',
  '#108ee9',
  'orange',
  '#f50',
  'green',
  '#eb2f96',
  'cyan',
  'blue',
  'geekblue',
  'purple',
  '#2db7f5',
]

export const randomTagColor = () => {
  const index = Math.floor(Math.random() * 13)
  return color[index] || '#f50'
}