import NavBar from '../NavBar';
import {useState } from 'react';
import './.Global.css';
import {Box,  Button,  Flex, Text} from '@chakra-ui/react';

function Home(){
    const [accounts,setAccounts] = useState([]);
  
    return (
      
      <div className='overlay'>
  
      <div className="home"> 
      <NavBar accounts ={accounts} setAccounts={setAccounts} />  
         </div>


    
      <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="1000px">
      <Text fontSize="48px" textShadow = "0 px #000000" color='white'>Dmoa</Text>
            <Text
            fontSize="30px"
            fontFamily= "Press Start 2P"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000" color='white'>the newer way of art</Text>
             <Text color = 'white' id="myDIV">Hello</Text>
             <Button class="button" onClick ="myFunction()" ></Button>
           
     
      </Box>

      </Flex>
      <div className='background' ></div>
      </div>
    );
}

export default Home;