  
  
const assertValue = (expected: number, actual: number): void => {
  console.log('Test value:', actual);
  if (expected !== actual) {
    console.warn(`${actual} is not equal to ${expected}`);
  }
};

enum DiscountType {
  TYPE1 = 0,
  TYPE2 = 0.1,
  TYPE3 = 0.3,
  TYPE4 = 0.5,
}

const calculateDiscount = (amount: number, type: DiscountType, years: number): number => {
  if (type === DiscountType.TYPE1) {
    return amount;
  }

  const disc = Math.min(years, 5) / 100;
  const baseDiscount = type ?? 0;
  const discountedAmount = amount * (1 - baseDiscount);
  const result = discountedAmount * (1 - disc);

  return result;
};

assertValue(100, calculateDiscount(100, DiscountType.TYPE1, 1));
assertValue(89.1, calculateDiscount(100, DiscountType.TYPE2, 1));
assertValue(69.3, calculateDiscount(100, DiscountType.TYPE3, 1));
assertValue(49.5, calculateDiscount(100, DiscountType.TYPE4, 1));

assertValue(100, calculateDiscount(100, DiscountType.TYPE1, 6));
assertValue(47.5, calculateDiscount(100, DiscountType.TYPE4, 6));

assertValue(100, calculateDiscount(100, DiscountType.TYPE1, 6));
assertValue(85.5, calculateDiscount(100, DiscountType.TYPE2, 6));
assertValue(66.5, calculateDiscount(100, DiscountType.TYPE3, 6));
assertValue(47.5, calculateDiscount(100, DiscountType.TYPE4, 6));

