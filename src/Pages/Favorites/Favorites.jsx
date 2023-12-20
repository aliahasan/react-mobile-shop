import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noDataFound, setNoDataFound] = useState(null);
  const [isSeeMore, setIsShowMore] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavorites(favoriteItems);

      const total = favoriteItems.reduce(
        (preValue, currentValue) => preValue + currentValue.price,
        0
      );
      setTotalPrice(total);
    } else {
      setNoDataFound("No Data Found");
    }
  }, []);

  const handleDeleteFavorite = () => {
    localStorage.clear();
    setFavorites([]);
    setNoDataFound("No Data Found");
  };

  return (
    <div>
      <div>
        {noDataFound ? (
          <p className="text-2xl h-[80vh] flex justify-center items-center">
            {noDataFound}
          </p>
        ) : (
          <div>
            {favorites.length > 0 && (
              <div>
                <button
                  onClick={handleDeleteFavorite}
                  className="px-5 my-5 py-3 text-white font-semibold rounded-lg bg-green-500 block mx-auto"
                >
                  Delete All favorites
                </button>
                <h1>Total Price : {totalPrice}</h1>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {isSeeMore
                ? favorites.map((phone) => (
                    <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                  ))
                : favorites
                    .slice(0, 2)
                    .map((phone) => (
                      <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                    ))}
            </div>

            {favorites.length > 2 && (
              <button
                onClick={() => setIsShowMore(!isSeeMore)}
                className="mt-5 px-5 py-3 text-white font-semibold rounded-lg bg-green-500 block mx-auto"
              >
                {isSeeMore ? "See less" : "See more"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
