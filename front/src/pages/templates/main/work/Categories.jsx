import React from "react";
import S from "./style";

const Categories = () => {
  return (
    <S.Categories>
      <li>
        <S.Category className="selected" data-category="all">
          All <S.CategoryCount>8</S.CategoryCount>
        </S.Category>
      </li>
      <li>
        <S.Category data-category="front-end">
          Front-end <S.CategoryCount>4</S.CategoryCount>
        </S.Category>
      </li>
      <li>
        <S.Category data-category="back-end">
          Back-end <S.CategoryCount>2</S.CategoryCount>
        </S.Category>
      </li>
      <li>
        <S.Category data-category="mobile">
          Mobile <S.CategoryCount>2</S.CategoryCount>
        </S.Category>
      </li>
    </S.Categories>
  );
};

export default Categories;
