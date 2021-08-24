import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [loading,setloading] = useState(true);

  return <article className="question">


        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={()=>setloading(!loading)} > {loading? <AiOutlinePlus></AiOutlinePlus> : <AiOutlineMinus></AiOutlineMinus>}</button>
        </header>
        <p>{loading?"":info}</p>



    
    </article>
};

export default Question;
