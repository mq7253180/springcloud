package com.quincy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@EnableAutoConfiguration
@EnableScheduling
@SpringBootApplication/*(exclude = {
        DataSourceAutoConfiguration.class
})*/
//@ServletComponentScan(basePackages= {"com.*"})
@ComponentScan(basePackages= {"com.*"})
public class TestBootstrap {
    public static void main(String[] args) {
    	SpringApplication sa = new SpringApplication(TestBootstrap.class);
        sa.addListeners(new ApplicationPidFileWriter());
        sa.run(args);
    }
}