export type GeometryType = {
    type: string; // 描述几何类型的字段
    coordinates: PolygonCoordinates[][];
};
export type PolygonCoordinates = [number, number];
export type ReportType = {
    id: string;
    title: string;
    description: string;
    disease: string;
    area: Array<any>;
    vineyard: Array<any>;
};
export type VineyardType = {
    id: string;
    name: string;
    winetype: string;
    areanumber: string;
    yearofplanning: string;
    area: string;
    execution: string;
    interventions: Array<string>;
    geometry: GeometryType;
    reports: ReportType[];
};
export type AreaType = {
    vineyards: VineyardType[];
    id: string;
    name: string;
    code: string;
    geometry: GeometryType;
};
