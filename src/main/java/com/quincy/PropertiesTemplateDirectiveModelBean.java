package com.quincy;

import java.io.IOException;
import java.io.Writer;
import java.util.Map;

import freemarker.core.Environment;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateDirectiveModel;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;

public class PropertiesTemplateDirectiveModelBean implements TemplateDirectiveModel {
	private org.springframework.core.env.Environment environment;

	public PropertiesTemplateDirectiveModelBean(org.springframework.core.env.Environment environment) {
		this.environment = environment;
	}

	@Override
	public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body)
			throws TemplateException, IOException {
		Object key = params.get("key");
		Writer out = env.getOut();
		String value = environment.getProperty(key.toString());
		out.write(value==null?"["+key.toString()+": null]":value);
	}
}
