import React from "react";
import { Heading, HStack, Image, Text, VStack, Box, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      transition="box-shadow 0.2s"
    >
      <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaK4UVnECoCkNrICKZKjn5TeJg7ExLvGNWwg&s'} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack align="start" p={4} spacing={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Button rightIcon={<FontAwesomeIcon icon={faArrowRight} />} colorScheme="teal">
            Learn More
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
