import { Flex , Button, Box, Center} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
import {
    Input,
    InputGroup,
    InputAddon,
    InputLeftAddon,
    InputRightAddon,
    InputElement,
    InputLeftElement,
    InputRightElement,
  } from "@chakra-ui/react"

export default function SearchBar() {
    return (
        <Center width='100%' h={700} backgroundImage="https://www.periu.com/wp-content/uploads/2014/07/Real-State.jpg">
            <Flex>
            <FormControl id="email" >
            <InputGroup>
            
                <Input type='location' placeholder=' e.g. Thessaloniki, Kalamaria' size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                <Input type='location' placeholder='€ Min' marginRight={1} size="lg" bg='white' width={130} _placeholder={{ color: 'gray.400' }} />
                <Input type='location' placeholder='€ Max' marginRight={1} size="lg" bg='white' width={130} _placeholder={{ color: 'gray.400' }}/>
                <Input type='location' placeholder='m² Min' size="lg" marginRight={1} bg='white' width={130} _placeholder={{ color: 'gray.400' }}/>
                <Input type='location' placeholder='m² Max' size="lg" marginRight={1} bg='white' width={130} _placeholder={{ color: 'gray.400' }}/>
                <Box paddingLeft={6}>
                <Button size='lg' variant='outline' borderColor='#ffffff' border='2px' color='#ffffff' _hover={{ bg: "#ff9999", color: " white" }} fontWeight='bold'>Search</Button>
                </Box>
                </InputGroup>
            </FormControl>
            </Flex>
        </Center>
    )
}