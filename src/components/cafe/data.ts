export const MENU = {
  Tea: [
    ["Pudina Tea", 20], ["Black Tea", 20], ["Ginger Tea", 25],
    ["Elaichi Tea", 30], ["Masala Tea", 30], ["Lemon Tea", 30],
    ["Tandoori Tea", 30], ["Green Tea", 50], ["Blue Tea", 50],
  ],
  "Cold Coffee": [
    ["Regular Cold Coffee", 89], ["Strong Cold Coffee", 99],
    ["Irish Cold Coffee", 119], ["Hazelnut Cold Coffee", 149],
  ],
  "Hot Coffee": [
    ["Black Hot Coffee", 30], ["Regular Hot Coffee", 50],
    ["Espresso Hot Coffee", 80], ["Irish Hot Coffee", 90],
  ],
  "Hot Chocolate": [
    ["Cadbury Hot Chocolate", 89], ["Nutella Hot Chocolate", 119],
    ["Hershey's Hot Chocolate", 129],
  ],
  Maggi: [
    ["Masala Maggi", 59], ["Cheesy Maggi", 79], ["Veg Maggi", 89],
    ["Double Masala Maggi", 89], ["Peri Peri Maggi", 119],
    ["Tandoori Maggi", 119], ["Butter Tadka Maggi", 149],
  ],
  Pasta: [
    ["White Sauce Pasta", 189], ["Pink Sauce Pasta", 199],
    ["Butter Tadka Pasta", 229],
  ],
  Pizza: [
    ["Margherita", 169], ["Sweet Corn", 189], ["Veg Cheese", 229],
    ["4 In 1 Pizza", 249], ["Paneer Tandoori", 289], ["Loaded Pizza", 299],
  ],
  Burger: [
    ["Cheesy Aloo Tikki Burger", 50], ["Spicy Dynamite Burger", 69],
    ["Tandoori Burger", 69], ["Cheese Blast Burger", 119],
  ],
  Fries: [
    ["Simply Salted Fries", 89], ["Peri Peri Fries", 99],
    ["Maggie Masala Fries", 99], ["Cheese Potato Fries", 119],
  ],
  Mocktails: [
    ["Mint Magic", 69], ["Blue Ocean", 79], ["Raspberry Fizz", 89],
    ["Green Forest", 99], ["Lychee Lemonade", 99], ["Rainbow Mocktail", 129],
  ],
  Milkshakes: [
    ["Oreo Milk Shake", 99], ["KitKat Milk Shake", 119], ["Mango Milk Shake", 129],
    ["Strawberry Milk Shake", 129], ["Chocolate Milk Shake", 139], ["Hazelnut Milk Shake", 149],
  ],
  Desserts: [
    ["Oreo Brownie Bowl", 129], ["KitKat Brownie Bowl", 149],
    ["Strawberry Brownie Bowl", 149], ["Waffle Bowl", 149], ["Kunafa Brownie Bowl", 199],
  ],
} as const;

export type MenuCategory = keyof typeof MENU;
export const CATEGORIES = Object.keys(MENU) as MenuCategory[];

export const REVIEWS = [
  { name: "Shanbhu Aadivasi", text: "Best chai place in Surat! Amazing ambience, friendly staff, and great taste with perfect quantity." },
  { name: "Bijal", text: "Refreshing lemon tea with cozy café vibes. A perfect place to relax and chill." },
  { name: "Rajat Singh", text: "Comfortable atmosphere for tea, snacks, work, and gossip with friends." },
  { name: "Hema Jain", text: "Beautiful café aesthetic with peaceful vibes and delicious chai. My happy place in Vesu." },
  { name: "Sanjay Vegad", text: "One of the best chill-out spots for family and friends with humble staff and tasty food." },
  { name: "Manish Khairnar", text: "Loved the sandwiches, french fries, and café atmosphere. Highly recommended!" },
];

export const CONTACT = {
  phone: "9099405222",
  whatsapp: "https://wa.me/919099405222",
  instagram: "https://instagram.com/chai_and_chill._navsari",
  instagramHandle: "chai_and_chill._navsari",
  maps: "https://www.google.com/maps/search/?api=1&query=Chai+N+Chill+VIP+Road+Vesu+Surat+Gujarat",
  address: "Chai N Chill, VIP Rd, opp. Ofira Avantis Group, Vesu, Surat, Gujarat 395007",
  hours: "Mon – Sun · 10:00 AM – 11:00 PM",
};
