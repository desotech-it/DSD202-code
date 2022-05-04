FROM r.deso.tech/dockerhub/library/maven:3-openjdk-8 AS build
COPY pom.xml .
RUN mvn --batch-mode dependency:resolve
COPY . .
RUN mvn --batch-mode package
RUN cp target/*jar target/app.jar

FROM r.deso.tech/dockerhub/library/openjdk:8-jre
EXPOSE 8080
VOLUME /tmp
COPY --from=build target/app.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
