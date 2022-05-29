export default function formatMoney(amount = 0) {
  const option = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  const formatter = Intl.NumberFormat('en-US', option);
  return formatter.format(amount/100);
}
