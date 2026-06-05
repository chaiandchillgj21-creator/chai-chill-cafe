export const MENU = {
  Tea: [
    ["Pudina Tea", 20], ["Black Tea", 20], ["Ginger Tea", 25],
    ["Elaichi Tea", 30], ["Masala Tea", 30], ["Lemon Tea", 30],
    ["Tandoori Tea", 30], ["Green Tea", 50], ["Blue Tea", 50],
    ["Peach Ice Tea", 60], ["Lemon Ice Tea", 70], ["Irish Tea", 80],
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
    ["Dubble Masala Maggi", 89], ["Butter Tadka Maggi (Special)", 149],
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
    ["Maggi Masala Fries", 99],
  ],
  Mocktails: [
    ["Mint Magic", 69], ["Blue Ocean", 79], ["Raspberry Fizz", 89],
    ["Green Forest", 99], ["Lychee Lemonade", 99], ["Rainbow Mocktail", 129],
    ["Siren Virgin", 79], ["Red Wine Marvel", 99], ["Grenadine Fizz", 99],
    ["Watermelon Breeze", 99], ["Coco Loco", 99], ["Pineapple Hawaiian", 99],
    ["Black Currant", 99], ["Blue Moon Mocktail", 129], ["Sunset Sip Mocktail", 129],
  ],
  Milkshakes: [
    ["Oreo Milk Shake", 99], ["KitKat Milk Shake", 119], ["Mango Milk Shake", 129],
    ["Strawberry Milk Shake", 129], ["Chiku Milk Shake", 129], ["Chocolate Milk Shake", 139], ["Hazelnut Milk Shake", 149],
  ],
  Desserts: [
    ["Oreo Brownie Bowl", 129], ["KitKat Brownie Bowl", 149],
    ["Strawberry Brownie Bowl", 149], ["Waffle Bowl", 149], ["Kunafa Brownie Bowl", 199],
    ["LS Regular", 99], ["LS Vanilla IceCream", 119], ["LS Dry Fruit", 129],
    ["LS Brownie", 179], ["LS Fully Loaded (Vanilla + Dry Fruits)", 189],
  ],

  "Garlic Bread": [
    ["Cheesy Garlic Bread", 90], ["Chilli Cheese Garlic Bread", 100], ["Veg Loaded Garlic Bread", 139],
  ],

  Chukkles: [
    ["Potato Cheese Shotts", 99], ["Mozrella Sticks", 99],
  ],

  Nachos: [
    ["Classic Cheesy Nachos", 99], ["Nachos With Salsa", 129], ["Cheesy Loaded Nachos", 149],
  ],

  "Fruit Shotts": [
    ["Jamun Shotts", 70], ["Strawberry Shotts", 70], ["Guava Shotts", 90],
  ],

  Sandwich: [
    ["Bread Butter", 50], ["Bread Butter Jam", 60], ["Veg Sandwich", 70],
    ["Cheese Chilli Toast", 99], ["Chocolate Sandwich", 119],
  ],

  "Grill Sandwich": [
    ["Cheese Chutney Grill", 99], ["Aloo Mutter Cheese Grill", 129], ["Paneer Loaded Grill", 149],
    ["Corn Cheese Grill", 149], ["Veg Cheese Grill", 180],
  ],

  Brownie: [
    ["White Chocolate Brownie", 99], ["Nutella Brownie", 119],
    ["Oreo Sizzling Brownie", 129], ["KitKat Sizzling Brownie", 149],
  ],
} as const;

export type MenuCategory = keyof typeof MENU;
export const CATEGORIES = Object.keys(MENU) as MenuCategory[];

export const REVIEWS = [
  { name: "Beyond Layers", text: "Best food with best atmosphere. I would like to recommend this cafe for food lovers. Must go and try the varieties and experience the taste." },
  { name: "Madhav Desai", text: "I had a good experience with this cafe. I found it as the best place to hang out with friends. The food and service were excellent. Absolutely worth visiting." },
  { name: "Kamlesh Vaishnav", text: "Chai ke saath chill karna hai to aa jaao Chai & Chill pe. Great food and enjoy the moment with friends." },
  { name: "Ummehani Ghoghari", text: "Very nice food. Must visit with your friends and loved ones." },
  { name: "Mehul Rathod", text: "Best place for friends and family to enjoy food." },
  { name: "Rupesh Suthar", text: "Tasty food and nice atmosphere." },
  { name: "Be Messy", text: "Amazing place with amazing taste of food. Love to visit again." },
  { name: "Aqsa Fuldhara", text: "Best food with best taste and amazing service. Highly recommended for all vegetarians. Games, music, and book reading facilities are also available." },
  { name: "Durga Suthar", text: "Incredible food, perfectly cooked and packed with flavor. The staff was super friendly and efficient. Fantastic food and wonderful service. Highly recommend." },
  { name: "Afiya Pathan", text: "Very nice place and awesome food. Must visit." },
  { name: "Salema Dabheli", text: "The food was absolutely delicious, the service was excellent, and it’s a really wonderful place." },
  { name: "Abhi Tandel", text: "I love the hot coffee. Most of the food items are tasty and enjoyable." },
  { name: "Dips Bhamre", text: "Same place, different vibe. Now with a unique taste and blend." },
  { name: "Falguni Patel", text: "Love the taste of momos and the variety of food. Must try the seasonal desserts." },
  { name: "Meet Viradiya", text: "Best food and service in Navsari. The taste is very good." },
  { name: "Prakash Purohit", text: "Very amazing food." },
  { name: "Prakash Jangid", text: "Delicious food, best taste. Best food with homemade taste." },
  { name: "Isha Maisuria", text: "Nice food. Amazing experience." },
  { name: "Dhruv Patel", text: "Friendly cafe, best for birthday parties and family celebrations." },
  { name: "Bhavin Solanki", text: "Best food." },
  { name: "Shivangi Parate", text: "Food is amazing and the ambience is really nice. Loved the overall vibe." },
];

export const CONTACT = {
  phone: "9427223459",
  whatsapp: "https://wa.me/919427223459",
  instagram: "https://instagram.com/chai_and_chill._navsari",
  instagramHandle: "chai_and_chill._navsari",
  maps: "https://www.google.com/maps/search/?api=1&query=Chai+N+Chill+Shop+No.+4+New+Bamji+Building+Opp+Police+Headquarters+Navchetan+Society+Lunsikui+Navsari+396445",
  address: "Shop No. 4, New Bamji Building, Opp. Police Headquarters, Navchetan Society, Lunsikui, Navsari – 396445",
  hours: "Mon – Sun · 10:00 AM – 11:00 PM",
};
