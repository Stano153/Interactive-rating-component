"use strict;";

const reviews = document.querySelectorAll(".review");
const submitBtn = document.querySelector("#submit-btn");
const reviewPage = document.querySelector(".review-page");
let reviewValue = 0;
let oldReview = null;

reviews.forEach((review) => {
  review.addEventListener("click", () => {
    if (review.value !== reviewValue) {
      oldReview === null || oldReview.value !== reviewValue
        ? (oldReview = review)
        : oldReview.classList.remove("active");
      oldReview = review;
      review.classList.add("active");
      reviewValue = review.value;
      // console.log(reviewValue);
    }
  });
});

submitBtn.addEventListener("click", () => {
  const selectedReview = document.querySelector(".active").value;
  reviewPage.classList.add("hidden");
  const reviewResultText = `You selected ${selectedReview} out of 5`;
  console.log(reviewResultText);
  const reviewText = document.querySelector("#review-result__text");
  reviewText.textContent = reviewResultText;
  const reviewResult = document.querySelector("#review-result");
  reviewResult.classList.remove("hidden");
  reviewResult.classList.add("review-result-style");
});
