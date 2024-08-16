package com.quincy.benelli.controller;

import java.util.Enumeration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("")
public class XxxController {
	@GetMapping("/static/**")
	public void handleStatic() {}

	@RequestMapping("/xxx/page")
	public String host(HttpServletRequest request) {
		this.print(request);
		return "www";
	}

	@RequestMapping("/xxx/ajax")
	@ResponseBody
	public TestVo ajax(HttpServletRequest request) {
		this.print(request);
		TestVo v = new TestVo();
		v.setName("Quincy");
		v.setSex("Male");
		return v;
	}

	private void print(HttpServletRequest request) {
		Enumeration<String> headerNames = request.getHeaderNames();
		log.warn("==========================");
		while(headerNames.hasMoreElements()) {
			String headerName = headerNames.nextElement();
			log.warn("{}-------{}", headerName, request.getHeader(headerName));
		}
		log.warn("==========================");
	}
}