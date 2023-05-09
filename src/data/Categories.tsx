import { CommonItem } from "../Types";
import { sortAZ, sortByCategory } from "../helpers/Helpers";

const commonItemsRaw: CommonItem[] = [
  {
    name: 'Broccoli',
    category: 'Produce'
  },
  {
    name: 'Cauliflower',
    category: 'Produce'
  },
  {
    name: 'Carrots',
    category: 'Produce'
  },
  {
    name: 'Celery',
    category: 'Produce'
  },
  {
    name: 'Cucumbers',
    category: 'Produce'
  },
  {
    name: 'Mushrooms',
    category: 'Produce'
  },
  {
    name: 'Lettuce',
    category: 'Produce'
  },
  {
    name: 'Tomatoes',
    category: 'Produce'
  },
  {
    name: 'Onions',
    category: 'Produce'
  },
  {
    name: 'Peppers',
    category: 'Produce'
  },
  {
    name: 'Green Beans',
    category: 'Produce'
  },
  {
    name: 'Salad mix',
    category: 'Produce'
  },
  {
    name: 'Potatoes',
    category: 'Produce'
  },
  {
    name: 'Garlic',
    category: 'Produce'
  },
  {
    name: 'Apples',
    category: 'Produce'
  },
  {
    name: 'Oranges',
    category: 'Produce'
  },
  {
    name: 'Bananas',
    category: 'Produce'
  },
  {
    name: 'Strawberries',
    category: 'Produce'
  },
  {
    name: 'Grapes',
    category: 'Produce'
  },
  {
    name: 'Raspberries',
    category: 'Produce'
  },
  {
    name: 'Blackberries',
    category: 'Produce'
  },
  {
    name: 'Lemons',
    category: 'Produce'
  },
  {
    name: 'Limes',
    category: 'Produce'
  },
  {
    name: 'Cantaloupe',
    category: 'Produce'
  },
  {
    name: 'Peaches',
    category: 'Produce'
  },
  {
    name: 'Pineapple',
    category: 'Produce'
  },
  {
    name: 'Avocado',
    category: 'Produce'
  },
  {
    name: 'Ground Beef',
    category: 'Meat'
  },
  {
    name: 'Ground Chicken',
    category: 'Meat'
  },
  {
    name: 'Ground Turkey',
    category: 'Meat'
  },
  {
    name: 'Ground Pork',
    category: 'Meat'
  },
  {
    name: 'Ground Meat',
    category: 'Meat'
  },
  {
    name: 'Sausage',
    category: 'Meat'
  },
  {
    name: 'Bacon',
    category: 'Meat'
  },
  {
    name: 'Beef',
    category: 'Meat'
  },
  {
    name: 'Lamb',
    category: 'Meat'
  },
  {
    name: 'Turkey',
    category: 'Meat'
  },
  {
    name: 'Chicken',
    category: 'Meat'
  },
  {
    name: 'Chicken Breast',
    category: 'Meat'
  },
  {
    name: 'Chicken Thigh',
    category: 'Meat'
  },
  {
    name: 'Chicken Quarters',
    category: 'Meat'
  },
  {
    name: 'Whole Chicken',
    category: 'Meat'
  },
  {
    name: 'Pork',
    category: 'Meat'
  },
  {
    name: 'Beef',
    category: 'Meat'
  },
  {
    name: 'Burgers',
    category: 'Meat'
  },
  {
    name: 'Hot Dogs',
    category: 'Meat'
  },
  {
    name: 'Frozen Fish',
    category: 'Fish & Seafood'
  },
  {
    name: 'Fish',
    category: 'Fish & Seafood'
  },
  {
    name: 'Crab',
    category: 'Fish & Seafood'
  },
  {
    name: 'Shrimp',
    category: 'Fish & Seafood'
  },
  {
    name: 'Sushi',
    category: 'Fish & Seafood'
  },
  {
    name: 'Tuna',
    category: 'Fish & Seafood'
  },
  {
    name: 'Canned Tuna',
    category: 'Fish & Seafood'
  },
  {
    name: 'Chips',
    category: 'Snacks'
  },
  {
    name: 'Chocolate Bars',
    category: 'Snacks'
  },
  {
    name: 'Cookies',
    category: 'Snacks'
  },
  {
    name: 'Candy',
    category: 'Snacks'
  },
  {
    name: 'Nuts',
    category: 'Snacks'
  },
  {
    name: 'Pretzels',
    category: 'Snacks'
  },
  {
    name: 'Popcorn',
    category: 'Snacks'
  },
  {
    name: 'Water',
    category: 'Beverages'
  },
  {
    name: 'Juice',
    category: 'Beverages'
  },
  {
    name: 'Pop',
    category: 'Beverages'
  },
  {
    name: 'Coffee',
    category: 'Beverages'
  },
  {
    name: 'Tea',
    category: 'Beverages'
  },
  {
    name: 'Beer',
    category: 'Beverages'
  },
  {
    name: 'Wine',
    category: 'Beverages'
  },
  {
    name: 'Milk',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Cream',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Coffee Creamer',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Almond Milk',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Soy Milk',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Cheese',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Butter',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Margarine',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Yogurt',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Sour Cream',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Ice Cream',
    category: 'Dairy & Alternatives'
  },
  {
    name: 'Bread',
    category: 'Grains & Bakery'
  },
  {
    name: 'Bagels',
    category: 'Grains & Bakery'
  },
  {
    name: 'Muffins',
    category: 'Grains & Bakery'
  },
  {
    name: 'Buns',
    category: 'Grains & Bakery'
  },
  {
    name: 'Rice',
    category: 'Grains & Bakery'
  },
  {
    name: 'Pasta',
    category: 'Grains & Bakery'
  },
  {
    name: 'Cereal',
    category: 'Grains & Bakery'
  },
  {
    name: 'Tortillas',
    category: 'Grains & Bakery'
  },
  {
    name: 'Hamburger Buns',
    category: 'Grains & Bakery'
  },
  {
    name: 'Hotdog Buns',
    category: 'Grains & Bakery'
  },
  {
    name: 'Pie',
    category: 'Grains & Bakery'
  },
  {
    name: 'Cookies',
    category: 'Grains & Bakery'
  },
  {
    name: 'Paper towels',
    category: 'Household'
  },
  {
    name: 'Dish soap',
    category: 'Household'
  },
  {
    name: 'Laundry detergent',
    category: 'Household'
  },
  {
    name: 'Toilet paper',
    category: 'Household'
  },
  {
    name: 'Tissues',
    category: 'Household'
  },
  {
    name: 'Aluminum foil',
    category: 'Household'
  },
  {
    name: 'Sponges',
    category: 'Household'
  },
  {
    name: 'Plastic bags',
    category: 'Household'
  },
  {
    name: 'Trash bags',
    category: 'Household'
  },
  {
    name: 'Soap',
    category: 'Health & Beauty'
  },
  {
    name: 'Shampoo',
    category: 'Health & Beauty'
  },
  {
    name: 'Conditioner',
    category: 'Health & Beauty'
  },
  {
    name: 'Deodorant',
    category: 'Health & Beauty'
  },
  {
    name: 'Body wash',
    category: 'Health & Beauty'
  },
  {
    name: 'Face wash',
    category: 'Health & Beauty'
  },
  {
    name: 'Moisturizer',
    category: 'Health & Beauty'
  },
  {
    name: 'Lotion',
    category: 'Health & Beauty'
  },
  {
    name: 'Toothpaste',
    category: 'Health & Beauty'
  },
  {
    name: 'Mouthwash',
    category: 'Health & Beauty'
  },
  {
    name: 'Medicine',
    category: 'Health & Beauty'
  },
  {
    name: 'Shaving cream',
    category: 'Health & Beauty'
  },
  {
    name: 'Vitamins',
    category: 'Health & Beauty'
  },
  {
    name: 'Protein Powder',
    category: 'Health & Beauty'
  },
  {
    name: 'Cat Food',
    category: 'Pet Supplies'
  },
  {
    name: 'Dog Food',
    category: 'Pet Supplies'
  },
  {
    name: 'Cat Litter',
    category: 'Pet Supplies'
  },
  {
    name: 'Cat Treats',
    category: 'Pet Supplies'
  },
  {
    name: 'Dog Treats',
    category: 'Pet Supplies'
  },
  {
    name: 'Salt',
    category: 'Pantry'
  },
  {
    name: 'Sugar',
    category: 'Pantry'
  },
  {
    name: 'Flour',
    category: 'Pantry'
  },
  {
    name: 'Cake Mix',
    category: 'Pantry'
  },
  {
    name: 'Frosting',
    category: 'Pantry'
  },
  {
    name: 'Hot Sauce',
    category: 'Pantry'
  },
  {
    name: 'Ketchup',
    category: 'Pantry'
  },
  {
    name: 'Mustard',
    category: 'Pantry'
  },
  {
    name: 'Mayonnaise',
    category: 'Pantry'
  },
  {
    name: 'Pickles',
    category: 'Pantry'
  },
  {
    name: 'Barbecue Sauce',
    category: 'Pantry'
  },
  {
    name: 'Peanut Butter',
    category: 'Pantry'
  },
  {
    name: 'Soy Sauce',
    category: 'Pantry'
  },
  {
    name: 'Salad Dressing',
    category: 'Pantry'
  },
  {
    name: 'Oil',
    category: 'Pantry'
  },
  {
    name: 'Olive Oil',
    category: 'Pantry'
  },
  {
    name: 'Vegetable Oil',
    category: 'Pantry'
  },
  {
    name: 'Honey',
    category: 'Pantry'
  },
  {
    name: 'Vanilla',
    category: 'Pantry'
  },
  {
    name: 'Jam',
    category: 'Pantry'
  },
  {
    name: 'Jelly',
    category: 'Pantry'
  },
  {
    name: 'Maple Syrup',
    category: 'Pantry'
  },
  {
    name: 'Salsa',
    category: 'Pantry'
  },
  {
    name: 'Coupons',
    category: 'Other'
  },
];

export const commonItems: CommonItem[] = commonItemsRaw.sort((a, b) => sortAZ(a, b)) // Sort alphabetically
  // Sort by category
  .sort((a, b) => sortByCategory(a, b));
  
// export const categoriesAll = commonItems.reduce((acc: string[], item: {name: string, category: string}) => {
//   if (!acc.includes(item.category)) {
//     acc.push(item.category);
//   }
//   return acc;
// }, []);

export const categoriesAll = ['Produce', 'Meat', 'Fish & Seafood','Snacks', 'Beverages', 'Dairy & Alternatives', 'Grains & Bakery', 'Pet Supplies', 'Health & Beauty', 'Pantry', 'Other'];