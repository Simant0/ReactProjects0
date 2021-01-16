import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://image.shutterstock.com/image-vector/seamless-vector-geometric-strip-pattern-600w-165708704.jpg"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1"
          title="legendary starfish"
          price={10}
          rating={4}
          image="https://images.freeimages.com/images/large-previews/5b8/starfish-1377326.jpg"
        />
        <Product
          id="2"
          title="golden pears"
          price={15}
          rating={4}
          image="https://images.freeimages.com/images/large-previews/cba/3pears-1323727.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="half avocado"
          price={3}
          rating={4}
          image="https://images.freeimages.com/images/large-previews/947/avocado-pear-2-1534005.jpg"
        />
        <Product
          id="8"
          title="legendary starfish"
          price={10}
          rating={4}
          image="https://images.freeimages.com/images/large-previews/5b8/starfish-1377326.jpg"
        />
        <Product
          id="4"
          title="legendary starfish"
          price={10}
          rating={4}
          image="https://images.freeimages.com/images/large-previews/5b8/starfish-1377326.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="5"
          title="legendary starfish"
          price={10}
          rating={4}
          image="https://images.freeimages.com/images/large-previews/5b8/starfish-1377326.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
