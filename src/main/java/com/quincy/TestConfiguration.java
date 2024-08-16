package com.quincy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import jakarta.annotation.PostConstruct;

@Configuration
public class TestConfiguration extends WebMvcConfigurationSupport {
	@Autowired
	private ApplicationContext applicationContext;
	@Autowired
    private freemarker.template.Configuration freemarkerCfg;
	@Value("${env}")
	private String env;

	@Override
	protected void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new StaticInterceptor(env)).addPathPatterns("/static/**");
	}

    @PostConstruct
    public void freeMarkerConfigurer() {
		freemarkerCfg.setSharedVariable("property", new PropertiesTemplateDirectiveModelBean(applicationContext.getEnvironment()));
    }
}