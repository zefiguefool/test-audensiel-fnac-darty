  enum DiscountType {
    TYPE1 = 0,
    TYPE2 = 0.1,
    TYPE3 = 0.3,
    TYPE4 = 0.5
  }  

const calculateDiscount  = (amount:number, type:DiscountType, years:number) : number => {
  
  // creation d'un objet contenant les remises de base pour chaque type de reduction
  

/*   const baseDiscounts = {
    1: 0, // Type 1 : pas de réduction
    2: 0.1, // Type 2 : 10%
    3: 0.3, // Type 3 : 30%
    4: 0.5, // Type 4 : 50%
  }; */

  if(type === DiscountType.TYPE1){
    return amount
  }

  const disc = Math.min(years, 5) / 100;

  const baseDiscount = type ?? 0; // Securité - Par défaut 0 si le type est inconnu
  const discountedAmount = amount * (1 - baseDiscount); // Appliquer la réduction de base


  const result = discountedAmount * (1 - disc); // Appliquer le discount supplémentaire lié à l'ancienneté
  return result;
};

assert = (expected, actual) => {
  console.log("Test value:", actual); // <- ajouté
  if (expected !== actual)
    console.warn(`${actual} is not equal to ${expected}`);
};

assert(99, calculateDiscount(100, DiscountType.TYPE1, 1));

assert(100, calculateDiscount(100, DiscountType.TYPE1, 1));
assert(100, calculateDiscount(100, DiscountType.TYPE2, 1));
assert(100, calculateDiscount(100, DiscountType.TYPE3, 1));
assert(100, calculateDiscount(100, DiscountType.TYPE4, 1));

assert(100, calculateDiscount(100, DiscountType.TYPE1, 1));
assert(100, calculateDiscount(100, DiscountType.TYPE4, 6));

assert(100, calculateDiscount(100, DiscountType.TYPE1, 6));
assert(100, calculateDiscount(100, DiscountType.TYPE2, 6));
assert(100, calculateDiscount(100, DiscountType.TYPE3, 6));
assert(100, calculateDiscount(100, DiscountType.TYPE4, 6));

