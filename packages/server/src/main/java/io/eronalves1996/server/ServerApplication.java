package io.eronalves1996.server;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.request.ServletWebRequest;

import io.eronalves1996.server.utils.JwtUtils;
import io.leangen.graphql.ExtensionProvider;
import io.leangen.graphql.GeneratorConfiguration;
import io.leangen.graphql.execution.ResolutionEnvironment;
import io.leangen.graphql.execution.ResolverInterceptor;
import io.leangen.graphql.execution.ResolverInterceptorFactory;
import io.leangen.graphql.spqr.spring.autoconfigure.DefaultGlobalContext;
import io.leangen.graphql.spqr.spring.util.GlobalResolverInterceptorFactory;
import jakarta.servlet.http.Cookie;

@SpringBootApplication
public class ServerApplication {

	@Value("${cookie.name}")
	private static String COOKIE_NAME;

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public ResolverInterceptor jwtInterceptor() {
		return (ctx, continuation) -> {
			ResolutionEnvironment env = ctx.getResolutionEnvironment();
			DefaultGlobalContext<ServletWebRequest> globalContext = (DefaultGlobalContext<ServletWebRequest>) env
					.getGlobalContext();
			ServletWebRequest nativeRequest = globalContext.getNativeRequest();
			Cookie[] cookies = nativeRequest.getRequest().getCookies();
			if (cookies != null) {
				for (Cookie c : cookies) {
					if (c.getName().equals(COOKIE_NAME)) {
						String payload = JwtUtils.verify(c.getValue());
						globalContext.setExtension("userId", payload);
						break;
					}
				}
			}
			return continuation.proceed(ctx);
		};
	}

	@Bean
	public ExtensionProvider<GeneratorConfiguration, ResolverInterceptorFactory> customInterceptors() {
		return (config, interceptors) -> interceptors
				.append(new GlobalResolverInterceptorFactory(Arrays.asList(jwtInterceptor())));
	}
}
