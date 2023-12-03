// const CoreConcepts = (props) => {
//   return (
//     <li>
//       <img src={props.image} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// };
const CoreConcept = ({image, title, description}) => {
    return (
      <li>
        <img src={image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
};
export default CoreConcept;