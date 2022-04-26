import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Hello") {
      x.innerHTML = "Swapped text!";
    } else {
      x.innerHTML = "Hello";
    }
  }

<Box margin="0 15px" color='white'>
<Button class="button" onClick = "myFunction()" >click</Button></Box>