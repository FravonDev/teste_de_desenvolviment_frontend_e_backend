export type rotas = {
    routeCode: string;
    routeMnemonic: string;
    companyId: number;
    stopId: number;
    serviceId: number;
    serviceMnemonic: string;
    predictionType: string;
    activeVehicles: number;
    scheduledVehicles: number;
    messages?: {
      text: string;
      ts: number;
      companyId: number;
      companyType: string;
      companyName: string;
    }[];
    vehicles?: any[];
    hasRealTime: boolean;
}

