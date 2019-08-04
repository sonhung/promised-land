export const formatPrice = (data = '')=> {
  const s = data.toString()
  const regex = /\B(?=(\d{3})+(?!\d))/g
  const result = s.replace(regex, '.')
  return result
}