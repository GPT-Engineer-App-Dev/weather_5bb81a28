import React, { useState } from "react";
import { Box, VStack, Text, Heading, Image, HStack, Divider, Spinner } from "@chakra-ui/react";

const Index = () => {
  const [weatherData, setWeatherData] = useState({
    city: "New York",
    temperature: 72,
    description: "Sunny",
    humidity: 50,
    wind: 5,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = () => {
    setIsLoading(true);
    // Simulating an API call with setTimeout
    setTimeout(() => {
      setWeatherData({
        city: "New York",
        temperature: 72,
        description: "Sunny",
        humidity: 50,
        wind: 5,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Box p={4} bg="blue.500" minH="100vh" color="white">
      <VStack spacing={6}>
        <Heading size="xl">{weatherData.city}</Heading>
        {isLoading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <Text fontSize="6xl" fontWeight="bold">
              {weatherData.temperature}°
            </Text>
            <Image src={`https://images.unsplash.com/photo-1579003593419-98f949b9398f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0J3ZWF0aGVyRGF0YS5kZXNjcmlwdGlvbiU3RCUyMHdlYXRoZXIlMjBpY29ufGVufDB8fHx8MTcxMjYwMjIxMnww&ixlib=rb-4.0.3&q=80&w=1080`} alt="Weather icon" boxSize="150px" />
            <Text fontSize="2xl">{weatherData.description}</Text>
            <HStack spacing={8} divider={<Divider orientation="vertical" />}>
              <Box>
                <Text>Humidity</Text>
                <Text fontWeight="bold">{weatherData.humidity}%</Text>
              </Box>
              <Box>
                <Text>Wind</Text>
                <Text fontWeight="bold">{weatherData.wind} mph</Text>
              </Box>
            </HStack>
          </>
        )}
        <Text onClick={fetchWeatherData} cursor="pointer" textDecoration="underline">
          Refresh
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
