package com.quincy;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Writer;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class StaticInterceptor extends HandlerInterceptorAdapter {
	private String env;

	public StaticInterceptor(String env) {
		this.env = env;
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
		if(request.getRequestURI().endsWith(".properties"))
			response.setContentType("application/octet-stream");
		String uri = request.getRequestURI();
		String location = ("dev".equals(this.env)?this.getClass().getResource("/").getPath().replaceAll("target/classes/", "src/main"):"/quincy/test")+uri;
		InputStream in = null;
		OutputStream out = null;
		Writer writer = null;
		try {
			in = new BufferedInputStream(new FileInputStream(location));
			byte[] buf = new byte[in.available()];
			in.read(buf);
			out = response.getOutputStream();
			out.write(buf);
		} finally {
			if(in!=null)
				in.close();
			if(out!=null)
				out.close();
			if(writer!=null)
				writer.close();
		}
		return false;
	}
}