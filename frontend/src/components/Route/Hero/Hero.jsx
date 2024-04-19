import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://micoopkitchen.com/wp-content/uploads/2016/02/micoopkitchenbck.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-slate-100 font-[600] capitalize`}
        >
          Your Path to <br /> Nutritious Cooking
        </h1>
        <p className="pt-5 text-[18px] font-[Poppins] font-[400] text-slate-300 max-w-[700px]">
          Embark on a culinary journey that nourishes both body and soul. At
          Fresh&Fit, we guide you along a flavorful path where wholesome
          ingredients meet creativity in the kitchen.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
