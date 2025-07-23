/**
 * @params price 가격(number)
 * @params fromCurrency 기준 통화(USD)
 * @params toCurrency 대상 통화(KRW)
 * @params rates 환율 정보 객체
 * @params returns 변환된 금액
 */

// interface
interface ExchangeRateMap {
  [currencyCode: string]: number;
}

export default function convertCurrency(
  price: number,
  fromCurrency: string,
  toCurrency: string
): number {
  const rates: ExchangeRateMap = {
    KRW: 1389.43,
    USD: 1,
  };

  if (fromCurrency === toCurrency) return price;
  const baseToUSD = fromCurrency === 'USD' ? 1 : 1 / rates[fromCurrency];
  const USDToTarget = toCurrency === 'USD' ? 1 : rates[toCurrency];

  return Math.floor(price * baseToUSD * USDToTarget);
}
