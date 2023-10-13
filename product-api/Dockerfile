FROM maven:3.8.3-openjdk-17 as build
COPY . .
WORKDIR .
RUN mvn clean install -DskipTests
EXPOSE 8081
CMD ["mvn","spring-boot:run"]