import { Grid, GridItem, Text, Center, Square, Circle } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function SocialSection(){
    return (
<Grid templateColumns='repeat(2, 1fr)' color="white" gap={0}  mt="0" mb="5"  bgGradient="linear(to-r, #ff9999, #ff8080, #ff9999)" >
<GridItem w='100%' p="10" paddingLeft={200}>
  <Text fontSize='2xl' color='white'>Be a friend, be social</Text>
  <Text fontSize='4xl' color='white'>Follow Nowayhome on</Text>
</GridItem>
<GridItem w='100%' p="6">
  <Grid templateColumns='repeat(3, 1fr)' color="white" gap={0}  mt="5">
    <GridItem w='100%' p="9">
      <Text fontSize='2xl' color='white'><Link>Facebook</Link></Text>
    </GridItem>
    <GridItem w='100%' p="9">
      <Text fontSize='2xl' color='white'><Link>Instagram</Link></Text>
    </GridItem>
    <GridItem w='100%' p="9">
      <Text fontSize='2xl' color='white'><Link>Youtube</Link></Text>
    </GridItem>
  </Grid>
</GridItem> 
</Grid>
    )
};