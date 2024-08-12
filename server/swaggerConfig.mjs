import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "CourseFlow API",
    description: "API documentation",
  },
  host: "localhost:4000",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.mjs"]; // Add more endpoint files as needed

swaggerAutogen()(outputFile, endpointsFiles);
