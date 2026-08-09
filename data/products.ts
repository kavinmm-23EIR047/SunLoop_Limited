export type ProductSub = { name:string; specs:string; desc:string };
export type Product = { id:string; eyebrow:string; title:string; tagline:string; range:string; desc:string; subProducts:ProductSub[] };
export const products:Product[] = [
  {id:'solar',eyebrow:'01 / Generate',title:'Solar Power Plants',tagline:'Clean generation for homes, businesses and industry.',range:'3 kW — MW+',desc:'High-efficiency solar panels with rooftop system for residential and rooftop or ground-mounted system options for commercial, industrial and utility-scale solar solutions designed for maximum energy generation and long-term savings.',subProducts:[
    {name:'Rooftop Solar (Elevated)',specs:'3 kW – 30 kW',desc:'Elevated rooftop system for Indian residential homes.'},
    {name:'Rooftop Solar (Industrial)',specs:'5 kW – 500 kW',desc:'Industrial rooftop system for factories and commercial buildings.'},
    {name:'Ground Mount Solar Plant',specs:'MW Scale',desc:'Large-scale ground-mounted plant for maximum energy generation.'}
  ]},
  {id:'lithium',eyebrow:'02 / Store',title:'Lithium Battery Storage',tagline:'Scalable. Reliable. Intelligent.',range:'2.5 kWh — 10,000 kWh',desc:'Advanced LiFePO4 battery energy storage solutions (WallArk, StackArk, RackArk-HV, BlockArk, and CubeArk series) ensuring 24/7 backup power, peak shaving, and energy independence.',subProducts:[
    {name:'Residential ESS (WallArk & StackArk)',specs:'48V–384V · 2.5–20 kWh',desc:'Wall-mounted and stackable high-voltage LiFePO4 packs for residential self-consumption and zero-outage backup.'},
    {name:'Commercial Rack & Cabinet ESS (RackArk & BlockArk)',specs:'30–500 kW · 30–1000 kWh',desc:'Rack-mounted HV battery packs and all-in-one smart ESS cabinets with HVAC for commercial peak shaving and load shifting.'},
    {name:'Utility Storage Container (CubeArk)',specs:'100–5000 kW · 100–10,000 kWh',desc:'20ft/40ft MWh containerized battery systems for utility substations and solar plant grid stabilization.'}
  ]},
  {id:'ev',eyebrow:'03 / Drive',title:'EV Chargers',tagline:'Smart. Reliable. Future ready.',range:'7.4 — 240 kW',desc:'Smart AC and DC charging solutions for residential communities, commercial buildings, industries, fleet operators and public charging networks.',subProducts:[
    {name:'AC EV Chargers',specs:'7.4 – 22 kW',desc:'Everyday charging for homes, commercial buildings, industrial fleets and public charging networks. Smart load management, app control and OCPP enabled.'},
    {name:'DC Fast Chargers',specs:'30 – 240 kW',desc:'Powerful fast charging for commercial buildings, industrial fleets, fleet depots, highways, malls, hotels and public charging hubs.'},
    {name:'Fleet & Public Charging',specs:'Multi-vehicle · 24/7 ready',desc:'Scalable charging operations with remote monitoring, smart access, billing and multiple payment options.'}
  ]}
];
