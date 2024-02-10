# 1. Filters 

### *The left side of the site has filters we need. Attributes referenced are based on the `Product` document model:*

### - TYPE: THIS is the SAME thing as the `subcategory` attribute. Give a dropdown of all possible `subcategories` available in the database. You should be able to apply one, and then a re-query happens.

### - BRAND: Give a dropdown of all possible `brands` in the database. You should be able to apply one, and then a re-query happens.

### - PRICE: Should have the option to sort from low-high, high-low, and a price limit field (ex. $50 max). You should be able to apply it, and then a re-query happens.

### - SIZE: Give a dropdown of all possible sizes in the databse. You should be able to apply one or more, and then a re-query happens. 

--------

# 2. API Consolidation (NOTE: NAVBAR EMITS)

### *You'll notice that /server/api/products has several sub-directories, each of which contain a get method for each of the 4 possible categories (ignore featured, this is 10 random products that show on init).*
### *The navbar emits 4 different categories.*
### *We want to consolidate:*

### - so that there is one api directory which has an `index.get.ts`, and the category passed into `Product.find` is that of the navbar's emission. 
### - so that this considers filters before finding 


# - this whole app basically just makes an array of products, heres a product document

#     {
#####  "_id": {
#####    "$oid": "65b4245ab5025b689973a734"
#####  },
#####  "category": "accessories",
#####  "subcategory": "hats",
#####  "name": "Wool 5-Panel Cap",
#####  "price": 40,
#####  "size": "OS",
#####  "color": "Black",
#####  "brand": "Arc'teryx",
#####  "country": "Bangladesh",
#####  "condition": "Used",
#####  "description": "An excellent warm wool 5-panel cap designed by Arc'teryx. No Flaws",
#####  "inventory": 1,
#####  "imageDir": "/images/accessories/hats/arcteryxhat",
#####  "images": []
#     }
