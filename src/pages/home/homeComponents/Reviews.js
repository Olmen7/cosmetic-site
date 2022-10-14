import React from "react";
import { ReviewData } from "./ReviewData";
import "./Reviews.css";

export const Reviews = () => {
  return (
    <>
      <div className="review-title-container">
        <h3 className="review-stars">Reviews</h3>
        <span className="review-stars">
          &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
        </span>
      </div>
      <section className="review-section">
        {ReviewData.map((index) => {
          return (
            <>
              <div className="review-box">
                <p className="review">{index.review}</p>
                <span className="author">-{index.author}</span>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
