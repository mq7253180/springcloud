package com.quincy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
//import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

//@EnableHystrixDashboard
@EnableZuulProxy
@EnableEurekaServer
@SpringBootApplication
//@ComponentScan(basePackages= {"com.*"})
public class SpringCloudBootstrap {
    public static void main(String[] args) {
    	SpringApplication sa = new SpringApplication(SpringCloudBootstrap.class);
        sa.addListeners(new ApplicationPidFileWriter());
        sa.run(args);
    }
}
