const calculateDiscount = (amount, type, years) => {
  const disc = Math.min(years, 5) / 100;
  // creation d'un objet contenant les remises de base pour chaque type de reduction
  const baseDiscounts = {
    1: 0, // Type 1 : pas de réduction
    2: 0.1, // Type 2 : 10%
    3: 0.3, // Type 3 : 30%
    4: 0.5, // Type 4 : 50%
  };
  const baseDiscount = baseDiscounts[type] ?? 0; // Securité - Par défaut 0 si le type est inconnu
  const discountedAmount = amount * (1 - baseDiscount); // Appliquer la réduction de base
  const result = type === 1 ? amount : discountedAmount * (1 - disc); // Appliquer le discount supplémentaire lié à l'ancienneté si ce n'est pas un type 1
  return result;
};

assert = (expected, actual) => {
  console.log("Test value:", actual); // <- ajouté
  if (expected !== actual)
    console.warn(`${actual} is not equal to ${expected}`);
};
assert(99, calculateDiscount(100, 1, 1));
