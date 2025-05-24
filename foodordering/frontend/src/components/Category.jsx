
import React from 'react';
import { Link } from 'react-router-dom';

function Category({ searchQuery = '' }) {
  const categories = [
        { name: "Fast Food", image: "https://th.bing.com/th/id/OIP.AIrPEBqo8Jf8zRuOai7XqAHaEJ?rs=1&pid=ImgDetMain", route: "/fastfood" },
        { name: "Chinese Cuisine", image: "https://img.freepik.com/premium-photo/assorted-chinese-food-set-chinese-noodles-fried-rice-dumplings-peking-duck-dim-sum-spring-rolls-famous-chinese-cuisine-dishes-table-top-view-chinese-restaurant-concept-asian-style-banquet_756748-11420.jpg", route: "/chinese" },
        { name: "Indian Cuisine", image: "https://wallpapercave.com/wp/wp3724278.jpg", route: "/indiancuisine" },
        { name: "Italian Cuisine", image: "https://wallpaperbat.com/img/48954-pizza-italian-food-wallpaper.jpg", route: "/italiancuisine" },
        { name: "Mexican Cuisine", image: "https://wallpapers.com/images/hd/mexico-foods-pictures-1000-x-667-3dhzpz530854migd.jpg", route: "/mexicancuisine" },
        { name: "Japanese Cuisine", image: "https://wallpapercave.com/wp/wp3776880.jpg", route: "/japanesecuisine" },
        { name: "Healthy Food", image: "https://th.bing.com/th/id/OIP.o3F-kWCC4S72puQvBLf3gwHaE8?rs=1&pid=ImgDetMain", route: "/healthyfood" },
        { name: "Desserts", image: "https://almourjan.qa/wp-content/uploads/2021/05/96b8be53-969f-4fb7-801e-7e92472f1631.jpg", route: "/desserts" },
        { name: "Beverages", image: "https://th.bing.com/th/id/OIP.eN3ipBh_w-uR0-GNjlKgPQHaE8?rs=1&pid=ImgDetMain", route: "/beverages" },
        { name: "Seafood", image: "https://www.solitarytraveller.com/wp-content/uploads/2020/10/seafood_banner.jpg", route: "/seafood" },
        { name: "BBQ And Grill", image: "https://th.bing.com/th/id/OIP.VyuNH5x69sqJ2jzk1brzNAHaEo?rs=1&pid=ImgDetMain", route: "/bbqandgrill" },
        { name: "Vegetarian And Vegan", image: "https://th.bing.com/th/id/OIP.Q-l_biSRHm8tMB-58CddrgHaEK?rs=1&pid=ImgDetMain", route: "/vegetarianandvegan" },
        { name: "Breakfast", image: "https://wallpaperaccess.com/full/1306162.jpg", route: "/breakfast" },
        { name: "Street Food", image: "https://logitrustvoyages.com/logitrustblog/wp-content/uploads/2020/07/street_food.jpeg", route: "/streetfood" },
        { name: "Tea & Coffee", image: "https://organicfit.tv/wp-content/uploads/2017/06/CoffeeAndTea-3.jpg", route: "/Teacoffeepage" },
  ];

  // Ensure searchQuery is always a string (default to empty string if undefined)
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center my-5 title" style={{ fontFamily: "'Dancing Script', cursive",  }}>
        Explore Our <span className="text-danger">Food Categories</span>
      </h1>
      <section id="category">
        <div className="row row-cols-1 row-cols-md-5 g-5 mx-5">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div key={index} className="col">
                <div className="card shadow-sm border-light">
                  <img src={category.image} className="card-img-top categoryimg" alt={category.name} />
                  <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    <Link to={category.route} className="btn btn-danger"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }}>
                      More Dishes
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No categories found</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Category;
