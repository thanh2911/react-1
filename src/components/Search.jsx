import {useState} from 'react';
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'


function Search() {

  const [input,setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  console.log(input);
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <FaSearch></FaSearch>
            <input 
                type='text'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                />
        </Form>
    </div>
  )
}

const Form = styled.form`

  border: 2px solid #000;
  width: 300px;
  padding-left : 10px;
  margin : 20px auto ;
  input {
    height: 30px;
    width:80%;
    font-size  : 1.3rem ;
    outline: none;
    border: none;
    padding-left : 10px;
    }
`

export default Search