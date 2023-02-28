package com.api.veiculos.services;

import com.api.veiculos.controllers.CittamobiController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class VeiculosService {
    private CittamobiController cittamobiController;

    public VeiculosService(CittamobiController cittamobiController) {
        this.cittamobiController = cittamobiController;
    }

    @GetMapping("/")
    public ResponseEntity<String> go() {
        return cittamobiController.getVehicleData();
    }
}
