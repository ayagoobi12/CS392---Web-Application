//defines a green-line stop from the GreenLine 
export interface Stop {
  id: string; 
  attributes: {
    name: string;
    platform_name: string | null; 
    latitude: number; 
    longitude: number;
    description: string | null; 
    wheelchair_boarding: number; // 0 = unknown, 1 = accessible, 2 = inaccessible
  };
}