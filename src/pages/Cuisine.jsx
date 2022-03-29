import React, { useState ,useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link , useParams} from 'react-router-dom'
 
function Cuisine() {

  const [cuisine,setCuisine] = useState([]);
  let params = useParams();
  console.log(cuisine);


  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9f5ee4c15e3643beb1cc8766f3fb8b44&cuisine=${name}`);
    const recipes = await data.json();

    setCuisine(recipes.results);
  }

  useEffect(() => {
    getCuisine(params.type)
  },[params.type])




  return (
    <Flex>
      {
        cuisine.map((item) => (
          <Card>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} />
          </Card>
    
        ))
      }
    </Flex>
  )
}

const Flex = styled.div`
  display:flex ;
  flex-wrap : wrap ;

`;

const Card = styled.div`
  width : 300px ;
  height : 200px;
  margin : 50px ;

  p {
    font-size : 1rem;
    font-weight : 600;
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1 ;
  text-align: center;
  margin-bottom : 10px ;
  }
  img {
    width : 100% ;
  }
`
export default Cuisine