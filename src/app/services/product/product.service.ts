import { Injectable } from '@angular/core';
import Product from 'src/app/models/product';
import { Tag } from 'src/app/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Properties
  private products: Array<Product> = [];
  private productCount:number;

  //Constructor
  constructor() {
    this.products = this.setAllProducts();
    this.productCount = this.products.length;
  }

  //Methods
  addProduct(product:Product){
    this.products.push(product);
    this.productCount = this.products.length;
  }

  removeProductById(productId:number){
    this.products = this.products.filter(item => item.productId !== productId);
    this.productCount = this.products.length;
  }
  /* *******************************************
   * Method Name: getProductById()
   * Access Type: public
   * Input Parameters: Product ID number
   * Return Type: Product object
   * Purpose: Will search the Products array and extract the target Product by Product ID
   *          Usually this would come from the database and backend, but for this version, let's filter the data here
   * ******************************************* */
  getProductById(id:number):Product{
    return this.getAllProducts().find(product => product.productId == id)!;
  }

  /* *******************************************
   * Method Name: getAllProductsBySearchTerm()
   * Access Type: public
   * Input Parameters: String for the search term
   * Return Type: Product[] array
   * Purpose: Find all products that satisfy the search term
   * ******************************************* */
  getAllProductsBySearchTerm(searchTerm:string):Product[]{
    return this.getAllProducts().filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  /* *******************************************
   * Method Name: getAllTags()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Tag[] array
   * Purpose: Retrieving all the tag names and associated counts.
   *         Ideally this information would come from the database. For this version, let's hard code the data
   * ******************************************* */
  getAllTags():Tag[]{

    return [
        {name:"All", count:this.productCount},
        {name: "spices", count: 2},
      
        {name: "vegetables", count: 8},
        {name: "bread", count: 2},
        {name: "pantry", count: 5},
        
        {name: "milk", count: 3},
       
      
        {name: "fruit", count: 2},
        
        {name: "nuts", count: 2},
        
        
        
        
        
        {name: "beverages", count: 4},
        {name: "poultry", count: 1},
        {name: "dairy", count: 1},
       
        {name: "snack", count: 8},
        
        {name: "rice", count: 1},
        {name: "cereal", count: 1},
        
        {name: "eggs", count: 1}
    ];
  }

  /* *******************************************
   * Method Name: getAllProductsByTag()
   * Access Type: public
   * Input Parameters: String with the target tag
   * Return Type: Product[] array
   * Purpose: Return allof the Products that have the desired tag
   * ******************************************* */
  getAllProductsByTag(tag:string):Product[]{

    //let's use the ternary operator :-)
    return (tag == "All") ?
            this.getAllProducts() :
            this.getAllProducts().filter(product => product.tags?.includes(tag));
  }

  /* *******************************************
   * Method Name: getAllProducts()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Product[] array
   * Purpose: Returns a hard-coded array of Product Objects
   *          Once the backend functionality is in place, the products will be stored in the database
   * ******************************************* */
  getAllProducts(): Product[]{
    return this.products;
  }

  getAllProductsCount():number{
    return this.products.length;
  }

  /* *******************************************
   * Method Name: setAllProducts()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Product[] array
   * Purpose: Returns a hard-coded array of Product Objects
   *          Once the backend functionality is in place, the products will be stored in the database
   * ******************************************* */
  setAllProducts(): Product[]{
    return [
      {
        productId:1,
        imageUrl: "/assets/images/basil.webp",
        productName: "Organic Basil",
        price: 3.07,
        brand: "H‑E‑B Organics",
        rating: 3,
        numOfReviews: 715,
        description: "Our H‑E‑B Organic Fresh Basil has about 1/2 CUP Chopped within the package! TIP: Toss fresh basil directly into salads, or chop & add to warm grains to add more herbaceous notes to your next meal!",
        organic: true,
        tags: ["vegetables"]
    },
    {
        productId:2,
        imageUrl: '/assets/images/Bonipaks-Celery-Hearts.jpg',
        productName: 'Celery Hearts',
        price: 2.84,
        brand: 'Bonipaks',
        rating: 4,
        numOfReviews: 645,
        description: "Crunchy organic celery, perfect for any soup, sandwich mix, or snack. Celery hearts are what we're used to eating: they're the tender inner ribs of the celery, which have been protected by more bitter, outer stalks. Yes, eating celery just got simpler. Don't forget celery hearts are a good source of vitamin A which promotes skin, eye, and bone health!",
        organic: true,
        tags: ['vegetables']
    },
    {
        productId:3,
        imageUrl: '/assets/images/DavesKillerBreadOrganicPowerseed.jpg',
        productName: 'Organic Powerseed Bread',
        price: 6.16,
        brand: "Dave's Killer Bread",
        rating: 4,
        numOfReviews: 165,
        description: "Sweetened with organic fruit juices, Powerseed® has 1g of sugar per slice. It is lightly sweet and power-packed with fiber, protein and whole grain nutrition.",
        organic: true,
        tags: ['bread']
    },
    {
        productId:4,
        imageUrl: '/assets/images/california ranch mild evoo.jpg',
        productName: 'Global Blend Mild Extra Virgin Olive Oil',
        price: 7.70,
        brand: 'California Olive Ranch',
        rating: 5,
        numOfReviews: 542,
        description: "Our mildest Extra Virgin Olive Oil from our California farmers and partner growers in Argentina, Chile and Portugal. The subtle flavor of this oil lends itself to baking, from sourdough bread to chocolate chip cookies. This product features our new Smart Labels - with a scan of the QR code, you'll be able to see the exact percentage of all regions for this product, as well as selected chemistry data on quality and healthiness of the oil.",
        organic: false,
        tags: ['pantry']
    },
    {
        productId:5,
        imageUrl: '/assets/images/canned coconut milk.jpeg',
        productName: 'Organic Unsweetened Coconut Milk',
        price: 3.84,
        brand: 'Thai Kitchen',
        rating: 4,
        numOfReviews: 785,
        description: "Thai Kitchen Organic Unsweetened Coconut Milk is made from pressed, ripe coconut meat. It’s a versatile ingredient for adding delicate flavor and rich texture in curries, sauces, soups, smoothies, beverages and more. Endless meals are just waiting to be made with this milk substitute. In fact, it’s not a substitute at all - we like to think of it as more of an upgrade as some of your favorite meals can be made just with this can. This organic coconut milk is also dairy-free, gluten-free and preservative-free, adding body and character right where you need it. It’s especially helpful for Asian cooking, decadent desserts and creamy beverages.",
        organic: true,
        tags: ['milk', 'beverages']
    },
    {
        productId:6,
        imageUrl: '/assets/images/cara cara oranges.webp',
        productName: 'Fresh Cara Cara Oranges',
        price: 1.16,
        brand: '',
        rating: 3,
        numOfReviews: 213,
        description: "Often referred to as the Pink Navel; Acidity levels are lower on Cara Cara compared to the traditional Navel Oranges",
        organic: false,
        tags: ['fruit', 'snack']
    },
    {
        productId:7,
        imageUrl: '/assets/images/cashew.jpg',
        productName: 'Jumbo Roasted Cashews, No Salt',
        price: 10.69,
        brand: 'SunRidge Farms',
        rating: 3.5,
        numOfReviews: 302,
        description: "These crisp, crunchy jumbo cashews are extra large, plump, meaty and roasted to perfection to bring out their delicious flavor. One taste of our cashews and you'll never settle for ordinary cashews again. These jumbo cashews make a super snacking gift. We have salted and unsalted cashews, both come in a variety of sizes. Enjoy our colossal cashews!",
        organic: false,
        tags: ['pantry', 'nuts',  'snack']
    },
    {
        productId:8,
        imageUrl: '/assets/images/cilantro.jpg',
        productName: 'Fresh Organic Cilantro',
        price: 1.32,
        brand: '',
        rating: 3,
        numOfReviews: 475,
        description: "Use this fresh organic cilantro for garnishing many of your favorite dishes. Widely used in Mexican, Middle Eastern, Indian and Asian cuisine.",
        organic: true,
        tags: ['vegetables']
    },
    {
        productId:9,
        imageUrl: '/assets/images/english-cucumber.jpg',
        productName: 'Fresh Seedless Cucumber',
        price: 1.01,
        brand: '',
        rating: 3.5,
        numOfReviews: 96,
        description: "Seedless Cucumbers are generally sweeter than a regular cucumber, which has large seeds. Great for salads, snacking and dipping",
        organic: false,
        tags: ['vegetables', 'snack']
    },
    {
        productId:10,
        imageUrl: '/assets/images/silk almond chocolate.jfif',
        productName: 'Dark Chocolate Almond Milk',
        price: 3.36,
        brand: 'Silk',
        rating: 5,
        numOfReviews: 987,
        description: "Indulge your sweet tooth the smart way with Silk Dark Chocolate Almondmilk. Featuring an indulgent touch of dark chocolate flavor, this almondmilk delivers all the deliciousness of chocolate milk minus the dairy. It has a mild, irresistible nutty taste that’s sure to bring a smile to your face, whether you mix it into your morning smoothie or enjoy it on its own. A great non-dairy option, Silk Dark Chocolate Almondmilk is totally free of dairy, soy, lactose, gluten, casein, egg, and MSG. And it’s nutritious, too: each serving provides vitamin E and contains 50% more calcium than dairy milk.* *Silk Dark Chocolate Almondmilk: An excellent source of calcium to support strong bones. Almondmilk with dark chocolate flavor. Provides vitamin E and 50% more calcium than dairy milk. 0g saturated fat per serving. Vegan. Non-GMO Project Verified",
        organic: false,
        tags: ['milk',  'beverages']
    },
    {
        productId:11,
        imageUrl: '/assets/images/fairlife whole milk.jpg',
        productName: 'Whole Lactose Free Milk',
        price: 4.10,
        brand: 'Fairlife',
        rating: 4,
        numOfReviews: 754,
        description: "We are driven by a simple belief: we can always make the world better. Proper nourishment allows us all to grow and thrive. At fairlife, we provide the health and vitality people need by starting with the wholesome simplicity of real cow’s milk. All our milk flows through soft filters to concentrate its goodness like protein and calcium while filtering out some of the natural sugars. Our deliciously creamy and full flavored fairlife Whole Ultra-Filtered Milk has 50% less sugar and 50% more protein than regular milk. Plus, there’s no artificial growth hormones used and it’s lactose free. So sip, drink and chug as you enjoy our delicious ultra-filtered milk.",
        organic: false,
        tags: ['milk', 'dairy', 'beverages']
    },
    {
        productId:12,
        imageUrl: '/assets/images/fivestarlettucemix.jpg',
        productName: 'Spring Mix',
        price: 3.58,
        brand: 'HEB Organics',
        rating: 4,
        numOfReviews: 642,
        description: "Thoroughly washed and ready to enjoy, this baby spring mix blend is a handy salad shortcut. Offering a good source of iron, it's certified USDA Organic and Kosher. Just add your favorite toppings and dressing for a gourmet-quality salad in seconds",
        organic: true,
        tags: ['vegetables']
    },
    {
        productId:13,
        imageUrl: '/assets/images/Gala.png',
        productName: 'Organic Gala Apples',
        price: 1.31,
        brand: '',
        rating: 4.5,
        numOfReviews: 872,
        description: "The Gala apple has a creamy yellow skin with pink to reddish stripes. It's distinctively sweet and crisp flavor makes it perfect a perfect addition to oatmeal or on salads. It's thin skin and firm texture make it an easy and delicious snack to slice up and enjoy raw.",
        organic: true,
        tags: ['fruit', 'snack']
    },
    {
        productId:14,
        imageUrl: '/assets/images/origano.jpg',
        productName: 'McCormick Italian Seasoning',
        price: 22.50,
        brand: 'Greensbury',
        rating: 4.5,
        numOfReviews: 698,
        description: "McCormick Italian Seasoning blends oregano, sage, rosemary, thyme.",
        organic: false,
        tags: ['spices']
    },
    {
        productId:15,
        imageUrl: '/assets/images/GarlicNaanPackage.png',
        productName: 'Frozen Garlic Naan, 3 count',
        price: 6.49,
        brand: 'Deep Indian Kitchen',
        rating: 3.5,
        numOfReviews: 630,
        description: "Vegetarian meat-free. Non-GMO. Always made from scratch. Indian kitchen. Authentic Indian bread, garlic, coriander. Baked in our clay over. Hatched stretched. Welcome to India: And welcome to our family's kitchen. Naan is India's most popular food. so we would never send you home without offering our Garlic Naan. We make it from scratch, the way our family has for generations - by hand - stretching the dough, seasoning it with garlic and coriander, and baking it in a clay tandoor oven. No vampires are harmed in the process. This dish is prepared with: garlic, coriander & wheat in a tandoor oven. deepindiankitchen.com. Dive Deeper: (at)deepindiankitchen. Deep Indian Kitchen: To our family, the name Deep is, well, deep. In India it means lamp and enlightenment, and our mission is to share the best of India's culture with everyone. That's why we care so much about our food and every purchase benefits our Deepkiran (Ray of Light) Foundation, which helps children in rural India access education. Children we support each year 22,000 plus. Product of India.",
        organic: false,
        tags: [ 'bread']
    },
    {
        productId:16,
        imageUrl: '/assets/images/golden star brown jasmine rice.webp',
        productName: 'Brown Jasmine Rice',
        price: 3.69,
        brand: 'Golden Star',
        rating: 4,
        numOfReviews: 714,
        description: "Grown in Thailand, Golden Star's Jasmine Rice is a naturally fragrant, long grain rice that is known for its slightly sweet taste and soft texture. Jasmine Rice is great with any meal!",
        organic: false,
        tags: ['pantry', 'rice', 'dried goods']
    },
    {
        productId:17,
        imageUrl: '/assets/images/good gather organic baby carrots.jfif',
        productName: 'Organic Baby Carrots',
        price: 2.02,
        brand: 'Good & Gather',
        rating: 4,
        numOfReviews: 452,
        description: "Good & Gather Organic Baby Carrots are a perfect healthy side for lunch boxes, dipping partner with ranch dressing and add a nice crunch to a stir fry. Organically grown without pesticides and packed without preservatives, your family will enjoy them in our various shapes and sizes. No matter how you cut it, you'll enjoy the benefits of our organic carrots packed with Vitamin A.",
        organic: true,
        tags: ['vegetables']
    },
    {
        productId:18,
        imageUrl: '/assets/images/organic heirloom tomatoes.webp',
        productName: 'Costoluto Fiorentino',
        price: 5.33,
        brand: 'Territorial Seed Company',
        rating: 5,
        numOfReviews: 1500,
        description: "Costoluto refers to the distinct flattened, heavily-ribbed shape of various Italian heirlooms. This gorgeous selection comes from Florence and impressed us with its early maturity of brilliant red, 4 inch wide by 1 ½ inch tall tomatoes. Fruit are juicy and flavorful for slicing but really shine when slow-roasted or cooked down into a rich sauce. Indeterminate plants perform well in both hot and cooler climates.",
        organic: true,
        tags: ['vegetables',  'snack']
    },
    {
        productId:19,
        imageUrl: '/assets/images/organic sweet yellow onion.jpg',
        productName: 'Organic Texas Sweet Onions (3 pound bag)',
        price: 14.99,
        brand: ' Organic Mountain Farms',
        rating: 3.5,
        numOfReviews: 793,
        description: "Texas Sweet 'Candy' Onions from Organic Mountain Farms are different because they really are sweet.",
        organic: false,
        tags: ['vegetables']
    },
    {
        productId:20,
        imageUrl: '/assets/images/organic-free-range-brown-eggs.jpeg',
        productName: 'Grade A Organic Cage Free Large Brown Eggs',
        price: 5.52,
        brand: 'Horizon Organic',
        rating: 4,
        numOfReviews: 419,
        description: "Delicious any way you crack it. Horizon eggs comes from hens fed an organic, vegetarian diet, with access to the outdoors.",
        organic: true,
        tags: ['eggs']
    },
    {
        productId:21,
        imageUrl: '/assets/images/peprika.jpg',
        productName: 'McCormick Culinary Paprika',
        price: 9.16,
        brand: 'McCormick',
        rating: 4,
        numOfReviews: 827,
        description: " Blended with chefs in mind, each container contains 18 ounces of ground paprika spice.",
        organic: true,
        tags: ['spices']
    },
    {
        productId:22,
        imageUrl: '/assets/images/organics diced tomatoes nsa.webp',
        productName: 'Petite Diced Tomatoes, No Salt Added',
        price: 2.54,
        brand: 'O Organics',
        rating: 4.5,
        numOfReviews: 879,
        description: "Organic petite diced tomatoes in organic tomato juice steam peeled. No salt added! Per 1/2 Cup: 25 Calories; 0 g sat fat (0% DV); 220 mg sodium (10% DV); 3 g total sugars. USDA Organic. Certified Organic by Quality Assurance International. Organic from the source. Doesn't it feel good to know where your food comes from? At O Organics we carefully select ingredients which meet organic farming standards and share our commitment to organic agriculture. That's our promise. Quality & satisfaction 100% guaranteed or your money back. how2recycle.info. SmartLabel: Scan for more food information. Non BPA lining (Can lining produced without the intentional addition of BPA). Non BPA can liner. 100% recyclable.",
        organic: true,
        tags: ['vegetables', 'produce']
    },
    {
        productId:23,
        imageUrl: '/assets/images/Raw-Food-Almond-food-Nut-Snack.webp',
        productName: 'Whole Natural Raw Almonds',
        price: 16.78,
        brand: 'HEB Select',
        rating: 3,
        numOfReviews: 413,
        description: "A good source of fiber and 6 vitamins and minerals. Contains 14 G of total fat per serving. Resealable bag for freshness. Steam pasteurized to maintain quality and safety without cooking. With H‑E‑B Select Ingredients, you'll enjoy foods with carefully chosen ingredients. We never use high fructose corn syrup, artificial flavors and hundreds of other synthetic ingredients that may be used in processed foods. ",
        organic: false,
        tags: ['nuts', 'snack']
    },
    {
        productId:24,
        imageUrl: '/assets/images/organic-red-lentils.jpg',
        productName: 'Organic Red Lentils',
        price: 8.79,
        brand: 'Arrowhead Mills',
        rating: 4.5,
        numOfReviews: 736,
        description: "Add a delicious and nutritious boost to any of your favorite dinners with Arrowhead Mills Organic Red Lentils. Packed with protein, nutrients like iron, potassium, calcium and thiamin, and a hearty source of fiber, Organic Red Lentils deliver plenty of benefits to your next meal. With a natural earthy flavor, Organic Red Lentils make a great addition to soups, curry dishes and more.",
        organic: true,
        tags: ['pantry', 'dried goods']
    },
    {
        productId:25,
        imageUrl: '/assets/images/topo chico lime.jfif',
        productName: 'Mineral Water Twist of Lime (4 pack)',
        price: 5.39,
        brand: 'Topo Chico',
        rating: 5,
        numOfReviews: 2654,
        description: "Topo Chico has always been known for the legend surrounding its origins. Today, it is one of the world's largest and best sparkling mineral water brands, with several flavors and packages sizes to satisfy even the most legendary thirst. Whether you believe in the legend or not, you'll still be able to enjoy the crisp, no-calorie taste of Topo Chico.",
        organic: false,
        tags: [ 'beverages']
    },
    {
        productId:26,
        imageUrl: '/assets/images/unsalted chicken broth.jpg',
        productName: 'Unsalted Chicken Stock',
        price: 2.95,
        brand: 'Kitchen Basics',
        rating: 4,
        numOfReviews: 871,
        description: "For yummy homemade taste, pick up some Kitchen Basics Unsalted Chicken Stock. Made with chicken, veggies and McCormick herbs, it enhances your favorite side dishes and sauces without any salt, artificial flavors or MSG. Plus, any leftover stock keeps fresh in your fridge, thanks to the twist cap on top. Chicken stock, Unsalted, Less than 5g net carbs, No artificial flavors, No MSG added, Gluten free",
        organic: false,
        tags: ['pantry']
    },
    {
        productId:27,
        imageUrl: '/assets/images/wild-caught-sea-scallops.webp',
        productName: 'Wild Caught Extra Jumbo Sea Scallops',
        price: 27.78,
        brand: 'HEB',
        rating: 4.5,
        numOfReviews: 748,
        description: "Rich flavor with a meaty texture. Great for sautéing or grilling. Fresh, never frozen, Wild caught",
        organic: false,
        tags: ['seafood']
    },
    {
        productId:28,
        imageUrl: '/assets/images/cheerios cereal.webp',
        productName: "Cheerios Cereal",
        price: 4.79,
        brand: "General Mills",
        rating: 4.5,
        numOfReviews: 523,
        description: "Cheerios has been a family favorite for years. Its wholesome goodness is perfect for toddlers to adults and everyone in between. Made from whole grain oats, and without artificial flavors or colors, they’re naturally low in fat and cholesterol free. These wholesome little “o’s” have only one gram of sugar!",
        organic: true,
        tags: ['cereal', 'snack']
    }

    ]
  }

  /* *******************************************
   * Method Name: getAllProductsOld()
   * Access Type: public
   * Input Parameters: none
   * Return Type: String[] array
   * Purpose: Returns a hardcoded String array with the pictures of the products
   * ******************************************* */
  getAllProductsOld():String[]{
    return [
      '/assets/images/basil.webp',
      '/assets/images/Bonipaks-Celery-Hearts.jpg',
      '/assets/images/california ranch mild evoo.jpg',
      '/assets/images/canned coconut milk.jpeg',
      '/assets/images/cara cara oranges.webp',
      '/assets/images/cashew.jpg',
      '/assets/images/cilantro.jpg',
      '/assets/images/DavesKillerBreadOrganicPowerseed.jpg',
      '/assets/images/english-cucumber.jpg',
      '/assets/images/silk almond chocolate.jfif',
      '/assets/images/fairlife whole milk.jpg',
      '/assets/images/fivestarlettucemix.jpg',
      '/assets/images/Gala.png',
      '/assets/images/origano.jpg',
      '/assets/images/GarlicNaanPackage.png',
      '/assets/images/golden star brown jasmine rice.webp',
      '/assets/images/good gather organic baby carrots.jfif',
      '/assets/images/organic heirloom tomatoes.webp',
      '/assets/images/organic sweet yellow onion.jpg',
      '/assets/images/organic-free-range-brown-eggs.jpeg',
      '/assets/images/peprika.jpg',
      '/assets/images/organics diced tomatoes nsa.webp',
      '/assets/images/Raw-Food-Almond-food-Nut-Snack.webp',
      '/assets/images/red-lentil.jpg',
      '/assets/images/topo chico lime.jfif',
      '/assets/images/unsalted chicken broth.jpg',
      '/assets/images/wild-caught-sea-scallops.webp'
    ]
  }

}
