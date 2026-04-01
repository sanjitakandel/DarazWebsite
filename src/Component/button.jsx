import"./become.css"
const Button=({button})=>{
    return(
        <>
        <div className="button-Container">
            <button>{button}</button>
        </div>
        </>
    )
}
export default Button;

export const Para=({headings,text})=>{
    return (
      <>
        <div className="number-container">
          <h1>{headings}</h1>
          <p>{text}</p>
          {/* <h6>{texts}</h6> */}
        </div>
      </>
    );
}

export const Images = ({ imagess, text, paragraph }) => {
  return (
    <>
      <div className="benefits-container">
        <img src={imagess} alt="" />

        <h1>{text}</h1>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export const Paragraphs=({Text,buttons,onClick})=>{
  return(
    <>
       <article className="paracontainer">
        <p>{Text}</p>
        <button onClick={onClick}> {buttons}</button>
       </article>
    </>
  )
}
 
