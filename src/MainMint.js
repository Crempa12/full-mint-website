import {useState} from 'react';
import { ethers, BigNumber } from 'ethers';
import BrewstersNFT from './BrewstersNFT.json';
import {Box, Button, Flex, Input, Text} from '@chakra-ui/react';


const BrewstersNFTAddress="0x2CA735473210b5C0049A01DF086AA67Eef99cf80";


const MainMint = ({accounts,setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    async function handleMint(){
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                BrewstersNFTAddress,
                BrewstersNFT.abi,
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount), {value: ethers.utils.parseEther((0.23 * mintAmount).toString()), });
                console.log('response: ', response);
            }
            catch(err){
                console.log("error ", err)
            }
        }
    }
    const handleDecrement = () => {
        if (mintAmount <= 1) return;
         setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
        if (mintAmount >= 4) return;
         setMintAmount(mintAmount + 1);
    };
    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
            <Text fontSize="48px" textShadow = "0 px #000000">Brewster&#38;Co.</Text>
            <Text
            fontSize="30px"
            fontFamily= "Press Start 2P"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000">The Finer Things</Text>
            {isConnected ?(
                <div>
                    <div>
                        <Button 
                backgroundColor = "#D6517D"
                borderRadius = "5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding = "px"
                margin = "0px" onClick={handleDecrement}> - </Button>

                        <Input
                        readOnly
                        fontFamily="inherit"
                        width="100px"
                        height ="20px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="5px"
                        type="number" value={mintAmount} />

                        <Button 
                backgroundColor = "#D6517D"
                borderRadius = "5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding = "px"
                margin = "0px" onClick={handleIncrement}> + </Button>
                    </div>
                    <Button 
                backgroundColor = "#D6517D"
                borderRadius = "5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding = "px"
                margin = "0px" 
                width="100px "
                onClick={handleMint}>Mint Now</Button>
                </div>
            ) : (
                <p>You must be connected to Mint.</p>
            )}
            </Box>
        </Flex>
    )
}
export default MainMint;