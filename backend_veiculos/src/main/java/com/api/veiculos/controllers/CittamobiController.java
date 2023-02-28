package com.api.veiculos.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
@Service
public class CittamobiController {
    public ResponseEntity<String> getVehicleData() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://api.cittamobi.com.br/m3p/js/prediction/stop/5195544";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        return response;
    }
}
