(function() {
  var app = angular.module('menuStore', []);

  // app.filter('checks', function() {
  //   return function
  // });
  app.filter('unsafe', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
  });

  app.controller('StoreController', function($scope){
   this.menus = details;
   $scope.typefilter = 'indian';
   $scope.clicked = function(type){
     $scope.typefilter = type;
   }
  });

  var details = [
    {
      soups: [
        {name:"Lentil Soup", description: "A healthy soup with red lentils cooked with a dash of Indian spices – served with papadams.", price:"99", cuisine:"indian"},
        {name:"Cream of mushroom (truffle flavour optional)",description: "Mushroom flavoured soup simmered and garnished with fresh herbs.", price:"125", cuisine:"italian"},
        {name:"Tomato and Basil soup",  description: "A tomato broth boiled and cooked with basil and fresh herbs.", price:"115", cuisine:"italian"},
        {name:"Minestrone Soup",  description: "Vegetables and small pasta pieces brought to a boil and flavoured to taste.", price:"115", cuisine:"italian"},
        {name:"Sweet Corn Soup",  description: "Chinese prepared soup with american corn and vegetables.", price:"125", cuisine:"chinese"},
        {name:"Hot and Sour", description: "Vegetables simmered in a preparation of corn starch flavoured with spices.", price:"110", cuisine:"chinese"},
        {name:"Manchow Soup",  description: "Chinese soup - prepared with vegetables, hot and spicy in taste.", price:"110", cuisine:"chinese"},
        {name:"Clear Soup",  description: "A soothing soup with healthy vegetables garnished and tastefully made.", price:"99", cuisine:"chinese"},
        {name:"Lemon Coriander",  description: "Lemon grass and coriander in a clear Thai soup.", price:"100", cuisine:"thai"},
        {name:"Tom Yum",  description: "Packed with herbs and vegetables, in a hot and sour flavour.", price:"120", cuisine:"thai"},
        {name:"Lemongrass", description: "Spicy soup flavoured with lemongrass, lime and vegetables.", price:"145", cuisine:"thai"},
        {name:"Miso Miso", description: "Soup with tofu and scallions cooked to taste.", price:"120", cuisine:"thai"},
        {name:"A Mexican meal as a soup", description: "beans cooked with salsa, served with cheese tortilla chips on the side", price:"135", cuisine:"mexican"},
        {name:"Lime, chilly and coriander", description: "A clear soup - mexican style.", price:"110", cuisine:"mexican"},
        {name:"Black bean and corn stew", description: "The two mexican ingredients - beans and corn, brought to a boil.", price:"120", cuisine:"mexican"}
      ],
      salads: [
        {name:"Kachumber Salad", description: "Diced tomatoes, cucumber & onions seasoned to taste.", price:"55", cuisine:"indian"},
        {name:"Moong Salad", description: "Sprouts tossed with onions & tomatoes and seasoned to taste.", price:"65", cuisine:"indian"},
        {name:"Chickpea Salad", description: "Small chickpeas tossed with onions & tomatoes, seasoned to taste.", price:"55", cuisine:"indian"},
        {name:"Vegetable Salad Platter", description: "Sliced vegetables (onion, cucumber and tomato) garnished with coriander, lime & greenchilies.", price:"50", cuisine:"indian"},
        {name:"Cucumber Raita", description: "Beaten curd mixed with cucumber, onions & coriander, garnished and seasoned to taste.", price:"99", cuisine:"indian"},
        {name:"Aloo Chat", description: "Diced potatoes tossed with tomatoes and onions, garnished and seasoned to taste.", price:"65", cuisine:"indian"},
        {name:"Fruit Chat", description: "Seasonal fruits chopped and served cold, with custard (optional) – healthy and refreshing", price:"105", cuisine:"indian"},
        {name:"Pasta Salad", description: "Elbow pasta tossed in French Vinaigrette and Mayonese topped with olives and corn.", price:"180", cuisine:"italian"},
        {name:"Watermelon and Feta Cheese Salad", description: "Tossed with argula leaves", price:"150", cuisine:"italian"},
        {name:"Caesar Salad", description: "The traditional caesar salad with crunchy iceberg lettuce and croutons.", price:"125", cuisine:"italian"},
        {name:"Goat Cheese Salad", description: "Salad tossed with berries and goat cheese.", price:"125", cuisine:"italian"},
        {name:"Kimchi", description: "Lettuce tossed in a spicy sauce.", price:"110", cuisine:"chinese"},
        {name:"Papaya Salad", description: "Raw papaya shredded and tossed with cherry tomatoes in green chillies and lime.", price:"125", cuisine:"thai"},
        {name:"Bangkok fruit Salad", description: "Exotic fruits diced and served tastefully.", price:"110", cuisine:"thai"},
        {name:"Spicy Cucumber Salad", description: "Cucumber shredded and tossed in spices.", price:"100", cuisine:"thai"},
        {name:"Spicy Corn Salad", description: "American corn and jalapeños tossed in spices and garnished tastefully.", price:"105", cuisine:"thai"},
        {name:"Raw Mango and Water Chestnut Salad", description: "Seasonally available with fresh Mango pieces.", price:"145", cuisine:"thai"},
        {name:"A shot of Taco Salad", description: "A taco arranged in a shot glass mixed as a salad.", price:"120", cuisine:"mexican"},
        {name:"Sweet Corn and Beans", description: "with a splash of sour cream", price:"115", cuisine:"mexican"},
        {name:"Corn and Coriander Salad", description: "Corn and coriander dressed in mexican oil and lime flavouring.", price:"120", cuisine:"mexican"}
      ],
      appetizers: [
        {name:"Papdi Chat", description: "Puri and chur-mur tossed with potatoes, onions and ragda in hung curd and India pastes garnished with coriander.", price:"95", cuisine:"indian"},
        {name:"Sev Puri", description: "Puri layered with potatoes and onions, topped with a mint & Tamarind paste garnished with coriander.", price:"55", cuisine:"indian"},
        {name:"Veg Tandoor Platter", description: "Vegetables marinated and cooked in a tandoor.", price:"105", cuisine:"indian"},
        {name:"Masala Mushrooms", description: "Mushrooms tossed in a marinade and seasoned with Indian pickles.", price:"90", cuisine:"indian"},
        {name:"Stuffed Mirch Baby Potatoes", description: "Baby potatoes tossed in a marinade and cooked in a tandoor to taste.", price:"95", cuisine:"indian"},
        {name:"Paneer Tikka", description: "Diced cubes of cottage cheese marinated and cooked in a tandoor.", price:"99", cuisine:"indian"},
        {name:"Ragda Pattice", description: "Patty made with potatoes and peas dressed with a white bean curry prepared with Indian spices made to taste.", price:"90", cuisine:"indian"},
        {name:"Pani Puri", description: "A hollow puri filled with potatoes, sprouts, small chickpeas and ragda topped with tamarind paste to be eaten with mint flavored pani.", price:"70", cuisine:"indian"},
        {name:"Samosa Chat", description: "A potato dumpling with a crispy ‘padd’ crushed and topped with curd and mint and tamarind pastes.", price:"95", cuisine:"indian"},
        {name:"Aamcha Maharashtra special", description: "A mixed platter serving missal pav, pav vada and a pav bhaji sandwich made with the Bombay touch.", price:"85", cuisine:"indian"},
        {name:"Bruschetta", description: "Flat bread topped with garlic & diced tomatoes.", price:"105", cuisine:"italian"},
        {name:"Cheese Platter", description: "Feta Cheese, Goat Cheese, Blue Cheese", price:"180", cuisine:"italian"},
        {name:"Stir Fried Veggies", description: "Exotic vegetables sautéed in olive oil and garnished with fresh herbs.", price:"120", cuisine:"italian"},
        {name:"Stuffed Mushrooms", description: "Mushrooms, filled with bread crumbs & mushrooms tossed in a wine sauce.", price:"120", cuisine:"italian"},
        {name:"Garlic Bread", description: "The traditional! - Bread toasted with finely grounded garlic butter.", price:"90", cuisine:"italian"},
        {name:"Zuchini, Broccoli and Mushroom Panini", description: "A open toasted sandwich.", price:"130", cuisine:"italian"},
        {name:"Balsamic Dip with Assorted Bread", description: "Types of bread served with the traditional balsamic vinegar.", price:"105", cuisine:"italian"},
        {name:"Mashed Potato", description: "served in a Garlic and Black Pepper sauce", price:"115", cuisine:"italian"},
        {name:"Fried / Steamed Wantons", description: "A vegetable dumpling steamed or fried.", price:"110", cuisine:"chinese"},
        {name:"Veg Spring Roll", description: "Vegetables diced and fried served with a sweet chilly sauce.", price:"120", cuisine:"chinese"},
        {name:"Vegetable Tempura", description: "Fried vegetables with a sweet chilli sauce.", price:"115", cuisine:"chinese"},
        {name:"Kung Pao Potato", description: "Potatoes sliced and sautéed in a Kung Pao sauce.", price:"120", cuisine:"chinese"},
        {name:"Paneer Chilly (Dry/ Gravy)", description: "Fried cottage cheese tossed in a soy & chilli sauce.", price:"120", cuisine:"chinese"},
        {name:"Assorted exotic Veg", description: "prepared in a dark soy sauce", price:"150", cuisine:"chinese"},
        {name:"Vegetable Satay", description: "Noodles and vegetables sautéed in a peanut chilli sauce.", price:"110", cuisine:"thai"},
        {name:"Cripsy fried Tofu", description: "Fried diced tofu cooked in a dark soy and sesame oil.", price:"130", cuisine:"thai"},
        {name:"Sweet & Sour Crispy Noodles", description: "Noodles half fried and tossed in a sweet & sour sauce.", price:"125", cuisine:"thai"},
        {name:"Exotic Vegetable in Basil", description: "Vegetables sautéed in fresh basil.", price:"180", cuisine:"thai"},
        {name:"Sauted Vegetable in Lettuce Wraps", description: "Exotic vegetables tossed in a sweet chilli sauce wrapped within crispy ice-burg lettuce.", price:"180", cuisine:"thai"},
        {name:"Thai Vegetable Dim Sum", description: "Vegetable Dim sum in a served with a spicy chilli and soy sauce.", price:"130", cuisine:"thai"},
        {name:"Thai Sautéed Mushrooms", description: "Button mushrooms sautéed in a spicy sauce.", price:"125", cuisine:"thai"},
        {name:"Chips and Dips ", description: "Choice of Sour Cream, Guacamole, Spicy Salsa, Cheese Jalapeño Sauce", price:"120", cuisine:"mexican"},
        {name:"Jacket Potatoes", description: "", price:"110", cuisine:"mexican"},
        {name:"Quesadillas", description: "Corn, capsicum and cheese.", price:"140", cuisine:"mexican"},
        {name:"Burrito Bowl in a Corn Puri", description: "", price:"130", cuisine:"mexican"},
        {name:"Black Bean and Goat Cheese Quesadillas", description: "made crisp to taste.", price:"145", cuisine:"mexican"},
        {name:"The Mexican bruschetta ", description: "with avocado and tomato", price:"120", cuisine:"mexican"},
        {name:"Nacho supreme", description: "Tortilla chips topped with tomatoes and jalapeños. Sour cream, Salsa and Guacamole.", price:"180", cuisine:"mexican"},
        {name:"Mexican Butta (Corn on the cob)", description: "American corn on the cob with jalapeño spice and butter.", price:"110", cuisine:"mexican"}
      ],
      main: [
        {name:"Paneer Makhani", description: "", price:"135", cuisine:"indian"},
        {name:"Baigan Bharta", description: "", price:"125", cuisine:"indian"},
        {name:"Dum Aloo", description: "", price:"130", cuisine:"indian"},
        {name:"Mixed Vegetable Tikka Masala", description: "", price:"125", cuisine:"indian"},
        {name:"Palak Paneer", description: "", price:"135", cuisine:"indian"},
        {name:"Malai Lofta", description: "", price:"125", cuisine:"indian"},
        {name:"Vegetable Kolapuri", description: "", price:"145", cuisine:"indian"},
        {name:"Dal Tadka", description: "", price:"125", cuisine:"indian"},
        {name:"Dal Makahni", description: "", price:"140", cuisine:"indian"},
        {name:"Assorted Breads", description: "<div class='options' onclick=\"$('#choicesRoti').toggleClass('show')\">Options <i class='fa fa-angle-down'></i><div id='choicesRoti' ><div class='left'>Roti<br><ol><li>Tandoori</li><li>Roomali Roti</li><li>Naan</li><li>Chapati</li></ol></div><div>Price <br/><ul class='price'><li>50</li><li>80</li><li>70</li><li>40</li></ul></div> </div></div>", price:"", cuisine:"indian"},
        {name:"Jeera Rice", description: "", price:"120", cuisine:"indian"},
        {name:"Steam Rice", description: "", price:"110", cuisine:"indian"},
        {name:"Gnocchi in Pesto sauce", description: "", price:"190", cuisine:"italian"},
        {name:"Choice of Pasta", description: "<div class='options' onclick=\"$('#choices').toggleClass('show')\">Options <i class='fa fa-angle-down'></i><div id='choices'><div class='left'>Pasta<br><ol><li>Spaghetti</li><li>Fusilli</li><li>Penne</li><li>Farfalle</li></ol></div><div>Sauce <br/><ol><li>Homemade Alfredo</li><li>Four Cheese</li><li>Arrabiata</li><li>Pomodoro</li><li>Aglio E Olio</li><li>Pesto</li><li>Vodka Sauce</li><li>Paprika</li></ol></div> </div></div>", price:" TBA", cuisine:"italian"},
        {name:"Choice of Pizza", description: "<div class='options' onclick=\"$('#choicesPizza').toggleClass('show')\">Options <i class='fa fa-angle-down'></i><div id='choicesPizza'><span><ol><li>Margherita</li><li>Veggie pizza</li><li>Our Special <br/><span class='subtext'>Pizza with a pesto base, cheese and tomatoes</span><li>Bumbaya pizza<br/><span class='subtext'> Capsicum, onions and tomatoes diced with a sweetened tomato puree</span></li></span></div></div>", price:" TBA", cuisine:"italian"},
        {name:"Three Mushroom Risotto", description: "", price:"190", cuisine:"italian"},
        {name:"Exotic Vegetables", description: "prepared in schezwan sauce", price:"180", cuisine:"chinese"},
        {name:"American Chopsuey", description: "", price:"190", cuisine:"chinese"},
        {name:"Sweet and Sour Vegetable", description: "", price:"180", cuisine:"chinese"},
        {name:"Schezwan Noodles", description: "", price:"175", cuisine:"chinese"},
        {name:"Hot Pot Rice", description: "", price:"195", cuisine:"chinese"},
        {name:"Veg Fried Rice", description: "", price:"170", cuisine:"chinese"},
        {name:"Manchurian", description: "", price:"150", cuisine:"chinese"},
        {name:"Veg Fried Rice - Soy flavored", description: "", price:"190", cuisine:"chinese"},
        {name:"Pak choi and American corn", description: "prepared in in soy / schezwan sauce", price:"185", cuisine:"chinese"},
        {name:"Tofu and Soft Vegetables", description: "prepared in black bean sauce", price:"225", cuisine:"chinese"},
        {name:"Veg Hakka Noodles", description: "", price:"195", cuisine:"chinese"},
        {name:"Thai Fried rice", description: "", price:"160", cuisine:"thai"},
        {name:"Red Curry noodles with Veggies", description: "", price:"200", cuisine:"thai"},
        {name:"Pad Thai noodles", description: "", price:"175", cuisine:"thai"},
        {name:"Jasmine rice", description: "", price:"150", cuisine:"thai"},
        {name:"Coconut rice", description: "", price:"190", cuisine:"thai"},
        {name:"Rice noodles with Thai pesto", description: "", price:"185", cuisine:"thai"},
        {name:"Spicy Thai fried rice", description: "", price:"190", cuisine:"thai"},
        {name:"Sweet & Spicy noodles", description: "", price:"175", cuisine:"thai"},
        {name:"Red Thai Curry", description: "", price:"180", cuisine:"thai"},
        {name:"Green Thai Curry", description: "", price:"180", cuisine:"thai"},
        {name:"Masaman Curry", description: "", price:"170", cuisine:"thai"},
        {name:"Exotic vegetables tossed in a Basil flavored curry", description: "", price:"185", cuisine:"thai"},
        {name:"Mexican Pizza", description: "can be used as starters", price:"170", cuisine:"mexican"},
        {name:"Fried Avocado Tacos", description: "", price:"160", cuisine:"mexican"},
        {name:"Make Your Own - burritos, taco (hard & soft)", description: "any way you like it.", price:"199", cuisine:"mexican"},
        {name:"Enchiladas", description: "", price:"170", cuisine:"mexican"},
        {name:"Mexican pasta", description: "", price:"185", cuisine:"mexican"},
        {name:"Mexican rice", description: "", price:"190", cuisine:"mexican"}
      ],
      desert: [
        {name:"Gulab Jamun", description: "", price:"95", cuisine:"indian"},
        {name:"Malai Kulfi", description: "", price:"90", cuisine:"indian"},
        {name:"Seasonal Ice Cream", description: "", price:"80", cuisine:"indian"},
        {name:"Tiramisu", description: "", price:"130", cuisine:"italian"},
        {name:"Chocolate Moussee", description: "", price:"120", cuisine:"italian"},
        {name:"Hand Crafted Sorbet", description: "", price:"110", cuisine:"italian"},
        {name:"Honey Glazed Noodles with Ice Cream", description: "", price:"110", cuisine:"chinese"},
        {name:"Seasonal Fresh Fruits with Custard or Ice Cream", description: "", price:"100", cuisine:"chinese"},
        {name:"Lychee Ice Cream (seasonal)", description: "", price:"120", cuisine:"chinese"},
        {name:"Banana's in coconut milk", description: "", price:"110", cuisine:"thai"},
        {name:"Coconut Ginger ice-cream", description: "", price:"120", cuisine:"thai"},
        {name:"Fresh seasonal fruits with ice cream", description: "", price:"110", cuisine:"thai"},
        {name:"Lemon Coconut Cake with Lemon Gaze", description: "", price:"130", cuisine:"thai"},
        {name:"Churros", description: "", price:"100", cuisine:"mexican"},
        {name:"Dulce de leche cheesecakes", description: "", price:"130", cuisine:"mexican"},
        {name:"Arroz con leche (rice pudding)", description: "Mexican Kheer.", price:"125", cuisine:"mexican"},
        {name:"Tres leches cake", description: "", price:"140", cuisine:"mexican"}
      ]
    }
  ];
})();
