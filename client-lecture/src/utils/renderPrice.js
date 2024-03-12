export default function renderPrice(price = 0) {
  return `Rp ${Number(price).toLocaleString("id-ID")},00`;
}
