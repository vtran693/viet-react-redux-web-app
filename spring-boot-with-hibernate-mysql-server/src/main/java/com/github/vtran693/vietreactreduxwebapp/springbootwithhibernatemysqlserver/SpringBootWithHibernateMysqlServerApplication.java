package com.github.vtran693.vietreactreduxwebapp.springbootwithhibernatemysqlserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.*;

@SpringBootApplication
public class SpringBootWithHibernateMysqlServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootWithHibernateMysqlServerApplication.class, args);
	}

	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/greeting-javaconfig").allowedOrigins("http://localhost:9000");
			}
		};
	}
}
