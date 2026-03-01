  import React, { useState } from "react";
  import Projects from "./Projects";
  import Categories from "./Categories";
  import S from "./style";

  const Work = ({ title, description }) => {
    const categories = [
      { id: "all", count: 4, label: "All" },
      { id: "front-end", count: 3, label: "Frond-end" },
      { id: "back-end", count: 1, label: "Back-end" },
      { id: "mobile", count: 0, label: "Mobile" },
    ];

    const projects = [
      {
        id: 1,
        type: "front-end",
        title: "Project #1",
        description: "Clone Coding with HTML, CSS",
        image: "project1.webp",
        link: "#",
        target: "_blank",
      },
      {
        id: 2,
        type: "front-end",
        title: "Project #2",
        description: "Clone Coding with HTML, CSS",
        image: "project2.webp",
        link: "#",
        target: "_blank",
      },
      {
        id: 3,
        type: "front-end",
        title: "Project #3",
        description: "Clone Coding with HTML, CSS",
        image: "project3.webp",
        link: "#",
        target: "_blank",
      },
      {
        id: 4,
        type: "back-end",
        title: "Project #4",
        description: "Clone Coding with HTML, CSS",
        image: "project4.webp",
        link: "#",
        target: "_blank",
      },
    ];
    // 카테고리 클릭 시 버튼 색 및 해당 데이터만 가져오기
    // 카테고리 hover시 count노출되기
    const [selectCategory, setSelectCategory] = useState("all");
    const filteredProject = 
    selectCategory === "all"
    ? projects 
    : projects.filter((project) => project.type === selectCategory);

    const handleCategoryOnClick = (categoryId) => (
      setSelectCategory(categoryId)
    )

    return (
      <S.Work id="work">
        <div className="max-container">
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <Categories
            categories={categories}
            selected={selectCategory}
            handleCategoryOnClick={handleCategoryOnClick}
          />
          <Projects projects={filteredProject}/>
        </div>
      </S.Work>
    );
  };

  export default Work;
