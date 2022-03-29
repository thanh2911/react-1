import {useState , useEffect} from 'react';
import styled from 'styled-components';
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';

function Veggie() {

    const [veggie,setVeggie] = useState([]);

    useEffect(() => {
        getVeegie();
    },[])

    const getVeegie = async () => {

        const check = localStorage.getItem('veggie');

        if(check) {
            setVeggie(JSON.parse(check));
        }
        else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=9f5ee4c15e3643beb1cc8766f3fb8b44&number=9&tags=vegetarian`
            ) ;
            const data = await api.json() ;
            localStorage.setItem('veggie' , JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }

    }

    console.log(veggie);
    
  return (
    <Wrapper>
    <Splide 
        options={ {
            perPage: 3  ,
            pagination:false ,
            arrows : false ,
            drag : "free",
            gap : "5rem"

        }}
      >
        {veggie.map((recipe) => {
            return(  
                <SplideSlide>
                    <Card key={recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                    </Card>
                </SplideSlide> 
            );
            })}
        </Splide>

    </Wrapper>
  )
}

const Wrapper = styled.div`
   margin : 4rem 0rem;
`;

const Card = styled.div`
    min-height: 15rem;
    border-radius:2rem;
    overflow: hidden;

    img {
        max-width: 100%;
        position : absolute ;
        left : 0 ;
        object-fit : cover ; 
        border-radius : 2rem ;
    }

    p {
        overflow: hidden;
        color : white ;
        position : absolute ;
        z-index : 10 ;
        left : 0%;
        top: 65%; 
    
        font-weight: 600;
        font-size : 0.9rem ;
        text-align:center ;

    }

`;

const Gradient = styled.div`
   z-index: 3 ;
   position : absolute ;
   width : 100% ;
   height : 100% ;
   background : linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))

`;

export default Veggie