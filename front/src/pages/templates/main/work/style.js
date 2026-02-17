// import styled from "styled-components";

// const S = {}

// S.Section = styled.div`
//   ${section}
// `;

// S.Title = styled.h2`
//   font-size: 2.5rem;
//   margin: 1rem 0;
// `;

// S.Description = styled.p`
//   font-size: 1.5rem;
//   margin: 0.5rem 0;
// `;

// #work {
//     background-color: var(--color-primary);
//     color: var(--color-white);
// }

// .categories {
//     display: flex;
//     justify-content: center;
//     margin: 2.5rem;
//     gap: 1rem;
// }

// .category {
//     position: relative;
//     color: var(--color-text);
//     font-size: 1.1rem;
//     padding: .5rem 3rem;
//     border-radius: 4px;
//     border: 1px solid var(--color-accent);
//     cursor: pointer;
//     white-space: nowrap;
// }

// .category--selected {
//     background-color: var(--color-accent); 
//     color: var(--color-primary);
//  }

//  .category__count {
//     opacity: 0;
//     position: absolute;
//     top: -20px;
//     right: 16px;
//     width: 28px;
//     height: 28px;
//     line-height: 28px;
//     border-radius: 100%;
//     background-color: var(--color-accent-variant);
//     color: var(--color-text);
//     transition: all 250ms ease-in;
//  }

//  .category--selected .category__count,
//  .category:hover .category__count {
//     opacity: 1;
//     top: 0;
//  }

//  .projects {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-template-rows: repeat(2, 1fr);
//     gap: 1rem;
//     transition: all 250ms ease-out;
//  }
 
//  .projects.anim-out {
//     opacity: 0;
//     transform: scale(.96) translateY(20px);
//  }

//  .project {
//     position: relative;
//     border-radius: 8px;
//     overflow: hidden;
//  }

//  .project__img {
//     width: 100%;
//  }

//  .project__metadata {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: var(--color-black);
//     opacity: 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     transition: all 250ms ease-in;
//     transform: translateY(-10px);
//  }

//  .project__metadata:hover {
//     opacity: .8;
//     transform: translateY(0px);
//  }

//  .project__title::after {
//     content: '';
//     display: block;
//     position: relative;
//     left: 50%;
//     transform: translateX(-50%);
//     margin: .5rem 0;
//     width: 50px;
//     height: 2px;
//     background-color: var(--color-accent);
//  }

// export default S;