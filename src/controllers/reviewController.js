const { Review, Products } = require("../db");

const newReview = async (obj) => {
  try {
    let objReview = {
      author: obj.author,
      title: obj.title,
      description: obj.description,
      rating: obj.rating,
      productId: obj.productId,
      // userId: obj.userId,
    };
    // let review = await Review.create(objReview);
    Review.create(objReview).then((x) => {
      return x;
    });
    //return review;
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = {
  newReview,
};
