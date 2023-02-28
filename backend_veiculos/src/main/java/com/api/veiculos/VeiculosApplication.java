package com.api.veiculos;
import com.api.veiculos.controllers.CittamobiController;
import com.api.veiculos.services.VeiculosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class VeiculosApplication {

	public static void main(String[] args) {
		SpringApplication.run(VeiculosApplication.class, args);
	}

	@Autowired
	private CittamobiController cittamobiController;

	@GetMapping("/test")
	public String index() {
		return "Api rodando";
	}
}



