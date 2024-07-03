let currentRate = null;

export function TakeRate(x) {
  currentRate = x;
  return x;
}

export function getCurrentRate() {
  return currentRate;
}
