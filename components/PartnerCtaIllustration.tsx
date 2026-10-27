import React from "react";

export function PartnerCtaIllustration() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none select-none"
      viewBox="0 0 1440 520"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Gradients */}
        <radialGradient id="sun-glow-left" cx="20%" cy="85%" r="45%" fx="20%" fy="85%">
          <stop offset="0%" stopColor="#E86526" stopOpacity="0.32" />
          <stop offset="50%" stopColor="#E86526" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#E86526" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="turbine-sky-glow" cx="82%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#E86526" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="solar-cell-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#0F172A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#090D16" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="solar-glare" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#E86526" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
        </linearGradient>

        <linearGradient id="tower-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.12" />
        </linearGradient>

        <linearGradient id="blade-grad-hero" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#E2E8F0" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.5" />
        </linearGradient>

        <linearGradient id="energy-cable" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E86526" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#FB923C" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#E86526" stopOpacity="0.1" />
        </linearGradient>

        {/* Glow Filter */}
        <filter id="beacon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="orange-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient Atmospheric Lighting */}
      <rect width="100%" height="100%" fill="url(#sun-glow-left)" />
      <rect width="100%" height="100%" fill="url(#turbine-sky-glow)" />

      {/* Blueprint / Tech coordinate accents */}
      <g opacity="0.25" stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="3 6">
        <line x1="80" y1="40" x2="80" y2="480" />
        <line x1="1360" y1="40" x2="1360" y2="480" />
        <line x1="40" y1="260" x2="1400" y2="260" strokeDasharray="2 10" />
      </g>
      {/* Precision Crosshairs */}
      <g stroke="#E86526" strokeWidth="1" opacity="0.4">
        <path d="M120 180 h12 M126 174 v12" />
        <path d="M1320 120 h12 M1326 114 v12" />
        <path d="M960 80 h8 M964 76 v8" />
      </g>

      {/* ========================================================
          LEFT: ARCHITECTURAL COMMERCIAL SOLAR FARM (Vector Array)
          ======================================================== */}
      <g className="solar-farm-vector" id="solar-farm" transform="translate(-30, 0)">
        {/* Subtle Rolling Ground Topography */}
        <path
          d="M-50 490 C120 475 280 482 460 455 C640 430 820 460 1020 475 C1220 490 1380 478 1500 488"
          stroke="#E86526"
          strokeWidth="1.5"
          opacity="0.45"
          strokeDasharray="6 4"
        />
        <path
          d="M-50 515 C150 500 320 508 520 480 C700 455 900 490 1100 500 C1300 512 1420 505 1500 510"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          opacity="0.2"
        />

        {/* --- Solar Table 3 (Distant Background Row) --- */}
        <g opacity="0.45">
          {/* Pier Foundations */}
          <line x1="12" y1="362" x2="12" y2="395" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="95" y1="340" x2="95" y2="370" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="178" y1="318" x2="178" y2="345" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="255" y1="298" x2="255" y2="325" stroke="#94A3B8" strokeWidth="1.5" />

          {/* Table Surface */}
          <polygon
            points="-25,372 230,305 310,340 55,407"
            fill="url(#solar-cell-fill)"
            stroke="#FFFFFF"
            strokeWidth="1"
            opacity="0.8"
          />
          {/* Racking Struts */}
          <line x1="-25" y1="372" x2="55" y2="407" stroke="#E86526" strokeWidth="1.2" opacity="0.6" />
          <line x1="230" y1="305" x2="310" y2="340" stroke="#E86526" strokeWidth="1.2" opacity="0.6" />
          {/* Panel Dividers */}
          <line x1="40" y1="355" x2="120" y2="390" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
          <line x1="105" y1="338" x2="185" y2="373" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
          <line x1="170" y1="321" x2="250" y2="356" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
        </g>

        {/* --- Solar Table 2 (Midground Row) --- */}
        <g opacity="0.75">
          {/* Foundation Posts & Cross Braces */}
          <g stroke="#94A3B8" strokeWidth="1.8">
            <line x1="25" y1="415" x2="25" y2="455" />
            <line x1="125" y1="388" x2="125" y2="425" />
            <line x1="225" y1="361" x2="225" y2="398" />
            <line x1="325" y1="334" x2="325" y2="370" />
            {/* Diagonal Trusses */}
            <line x1="25" y1="450" x2="125" y2="395" strokeWidth="1" stroke="#E86526" opacity="0.5" />
            <line x1="125" y1="420" x2="225" y2="368" strokeWidth="1" stroke="#E86526" opacity="0.5" />
            <line x1="225" y1="395" x2="325" y2="340" strokeWidth="1" stroke="#E86526" opacity="0.5" />
          </g>

          {/* Table Surface with Glass Gradient */}
          <polygon
            points="-10,425 295,345 395,390 90,470"
            fill="url(#solar-cell-fill)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          <polygon
            points="-10,425 295,345 395,390 90,470"
            fill="url(#solar-glare)"
          />

          {/* Longitudinal Torque Tube Rail */}
          <line x1="-12" y1="427" x2="397" y2="392" stroke="#E86526" strokeWidth="1" opacity="0.4" />

          {/* Module Grid Separators */}
          <g stroke="#FFFFFF" strokeWidth="1" opacity="0.6">
            <line x1="68" y1="404" x2="168" y2="449" />
            <line x1="144" y1="384" x2="244" y2="429" />
            <line x1="220" y1="364" x2="320" y2="409" />
            {/* Mid-string dividing line */}
            <line x1="40" y1="447" x2="345" y2="367" strokeWidth="0.8" opacity="0.5" />
          </g>
        </g>

        {/* --- Solar Table 1 (Foreground Hero Table) --- */}
        <g id="hero-solar-table">
          {/* Structural Heavy-Duty Racking Substructure */}
          <g stroke="#CBD5E1" strokeWidth="2.2" strokeLinecap="round">
            {/* Front Leg Posts */}
            <line x1="45" y1="478" x2="45" y2="520" />
            <line x1="175" y1="442" x2="175" y2="488" />
            <line x1="305" y1="406" x2="305" y2="452" />
            <line x1="435" y1="370" x2="435" y2="416" />

            {/* Back Leg Posts (Elevated for Optimal Tilt) */}
            <line x1="-40" y1="435" x2="-40" y2="495" strokeWidth="1.8" opacity="0.7" />
            <line x1="90" y1="399" x2="90" y2="455" strokeWidth="1.8" opacity="0.7" />
            <line x1="220" y1="363" x2="220" y2="420" strokeWidth="1.8" opacity="0.7" />
            <line x1="350" y1="327" x2="350" y2="385" strokeWidth="1.8" opacity="0.7" />

            {/* Galvanized Diagonal Bracing (X-Bracing) with Sunloop Orange Highlights */}
            <line x1="45" y1="510" x2="175" y2="450" stroke="#E86526" strokeWidth="1.8" opacity="0.85" />
            <line x1="45" y1="480" x2="175" y2="480" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="478" x2="305" y2="418" stroke="#E86526" strokeWidth="1.8" opacity="0.85" />
            <line x1="305" y1="444" x2="435" y2="384" stroke="#E86526" strokeWidth="1.8" opacity="0.85" />

            {/* Ground Pier Foundation Footings */}
            <rect x="37" y="515" width="16" height="5" rx="1" fill="#94A3B8" />
            <rect x="167" y="484" width="16" height="5" rx="1" fill="#94A3B8" />
            <rect x="297" y="448" width="16" height="5" rx="1" fill="#94A3B8" />
            <rect x="427" y="412" width="16" height="5" rx="1" fill="#94A3B8" />
          </g>

          {/* 3D Depth Aluminum Table Chassis Frame */}
          <polygon
            points="-50,442 410,342 410,349 -50,449"
            fill="#334155"
            stroke="#64748B"
            strokeWidth="1"
          />
          <polygon
            points="-50,449 530,379 530,373 -50,442"
            fill="#1E293B"
            stroke="#475569"
            strokeWidth="0.8"
          />

          {/* Main Photovoltaic Module Plane */}
          <polygon
            points="-50,442 410,342 530,373 70,473"
            fill="url(#solar-cell-fill)"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Glass Specular Sun Reflection */}
          <polygon
            points="-50,442 410,342 530,373 70,473"
            fill="url(#solar-glare)"
          />

          {/* Module Borders & Cell Busbar Matrix */}
          <g stroke="#FFFFFF" strokeWidth="1.2" opacity="0.85">
            {/* Vertical Module String Borders */}
            <line x1="42" y1="422" x2="162" y2="453" />
            <line x1="134" y1="402" x2="254" y2="433" />
            <line x1="226" y1="382" x2="346" y2="413" />
            <line x1="318" y1="362" x2="438" y2="393" />

            {/* Horizontal Split-Cell Centerline */}
            <line x1="10" y1="457" x2="470" y2="357" strokeWidth="1" stroke="#E86526" opacity="0.6" />

            {/* Micro Silicon Cell Gridlines (Architectural Precision) */}
            <g stroke="#94A3B8" strokeWidth="0.6" opacity="0.45" strokeDasharray="5 3">
              <line x1="-4" y1="432" x2="116" y2="463" />
              <line x1="88" y1="412" x2="208" y2="443" />
              <line x1="180" y1="392" x2="300" y2="423" />
              <line x1="272" y1="372" x2="392" y2="403" />
              <line x1="364" y1="352" x2="484" y2="383" />
              {/* Extra Busbar Lines */}
              <line x1="-20" y1="450" x2="440" y2="350" />
              <line x1="40" y1="465" x2="500" y2="365" />
            </g>

            {/* Solar Panel Framing Clamps with Orange Highlight */}
            <circle cx="42" cy="422" r="2.5" fill="#E86526" stroke="#FFFFFF" strokeWidth="0.8" />
            <circle cx="134" cy="402" r="2.5" fill="#E86526" stroke="#FFFFFF" strokeWidth="0.8" />
            <circle cx="226" cy="382" r="2.5" fill="#E86526" stroke="#FFFFFF" strokeWidth="0.8" />
            <circle cx="318" cy="362" r="2.5" fill="#E86526" stroke="#FFFFFF" strokeWidth="0.8" />
          </g>

          {/* High-Voltage String Inverter / Combiner Unit mounted on rack */}
          <g id="string-inverter">
            {/* Box Body */}
            <rect
              x="442"
              y="388"
              width="24"
              height="36"
              rx="3"
              fill="#0F172A"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            {/* Heat Sink Cooling Fins */}
            <line x1="446" y1="394" x2="462" y2="394" stroke="#64748B" strokeWidth="1" />
            <line x1="446" y1="398" x2="462" y2="398" stroke="#64748B" strokeWidth="1" />
            <line x1="446" y1="402" x2="462" y2="402" stroke="#64748B" strokeWidth="1" />
            {/* Status LED Beacon (Operational Green + Sunloop Orange) */}
            <circle cx="449" cy="414" r="2" fill="#10B981" />
            <circle cx="457" cy="414" r="2" fill="#E86526" filter="url(#orange-glow)" />
          </g>

          {/* Intelligent Power Bus Cable (Glowing Vector Line towards Center) */}
          <path
            d="M466 412 C520 420 580 435 640 430 C710 425 760 445 820 440"
            stroke="url(#energy-cable)"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            filter="url(#orange-glow)"
          />
          {/* Energy Telemetry Nodes */}
          <circle cx="530" cy="422" r="3.5" fill="#E86526" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="640" cy="430" r="3" fill="#E86526" stroke="#FFFFFF" strokeWidth="1" />
        </g>
      </g>

      {/* ========================================================
          RIGHT: COMMERCIAL WIND TURBINE FARM (Illustrator Vectors)
          ======================================================== */}
      <g className="wind-farm-vector" id="wind-farm" transform="translate(25, 0)">
        {/* Dynamic Atmospheric Wind Current Streamlines */}
        <g stroke="url(#energy-cable)" strokeWidth="1.2" opacity="0.35" fill="none">
          <path d="M880 140 C1000 120 1140 180 1320 150 C1380 140 1420 155 1460 160" />
          <path d="M920 220 C1060 190 1180 250 1360 210 C1410 200 1450 215 1480 220" strokeDasharray="8 6" />
          <path d="M1020 90 C1140 70 1250 120 1380 95 C1420 85 1450 95 1480 100" opacity="0.2" />
        </g>

        {/* ----------------------------------------------------
            TURBINE 4: Distant Silhouette (Vast Farm Scale)
            ---------------------------------------------------- */}
        <g opacity="0.4" id="turbine-distant-horizon">
          {/* Slender Tower */}
          <polygon points="984,510 988,510 987,360 985,360" fill="#FFFFFF" />
          <circle cx="986" cy="360" r="3.5" fill="#FFFFFF" />
          {/* Airfoil Blades */}
          <path d="M986 360 L986 305" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M986 360 L940 388" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M986 360 L1030 388" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          {/* Orange Blade Tips */}
          <line x1="986" y1="318" x2="986" y2="305" stroke="#E86526" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="950" y1="382" x2="940" y2="388" stroke="#E86526" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="1020" y1="382" x2="1030" y2="388" stroke="#E86526" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* ----------------------------------------------------
            TURBINE 3: Mid-Background Turbine (Left of Group)
            ---------------------------------------------------- */}
        <g opacity="0.75" id="turbine-midground-left">
          {/* Tapered Tower */}
          <polygon
            points="1066,515 1076,515 1073,268 1069,268"
            fill="url(#tower-grad-1)"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          {/* Tower Flange Rings */}
          <line x1="1067" y1="440" x2="1075" y2="440" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.5" />
          <line x1="1068" y1="350" x2="1074" y2="350" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.5" />

          {/* Aerodynamic Nacelle Housing */}
          <path
            d="M1063 268 C1063 264 1068 261 1078 261 L1088 263 C1092 264 1093 268 1092 271 L1064 271 Z"
            fill="#FFFFFF"
            stroke="#94A3B8"
            strokeWidth="0.8"
          />
          {/* Red/Orange Warning Beacon */}
          <circle cx="1074" cy="259" r="2" fill="#E86526" filter="url(#beacon-glow)" />

          {/* Aerodynamic Spinner Rotor Hub */}
          <ellipse cx="1063" cy="266" rx="4" ry="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="1063" cy="266" r="2.5" fill="#E86526" />

          {/* 3 Scaled Airfoil Blades (Dynamic Rotation Angle) */}
          <g strokeLinecap="round">
            {/* Blade 1 (Upper-Right ~55°) */}
            <path
              d="M1063 266 Q1085 220 1115 178"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              fill="none"
            />
            <path
              d="M1105 192 L1115 178"
              stroke="#E86526"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Blade 2 (Down-Right ~175°) */}
            <path
              d="M1063 266 Q1075 325 1072 380"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              fill="none"
            />
            <path
              d="M1073 362 L1072 380"
              stroke="#E86526"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Blade 3 (Down-Left ~240° for clean text clearance) */}
            <path
              d="M1063 266 Q1035 305 1018 345"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              fill="none"
            />
            <path
              d="M1028 322 L1018 345"
              stroke="#E86526"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* ----------------------------------------------------
            TURBINE 2: Midground Turbine (Far Right)
            ---------------------------------------------------- */}
        <g opacity="0.88" id="turbine-midground-right">
          {/* Tapered Steel Tubular Tower */}
          <polygon
            points="1328,515 1342,515 1337,235 1332,235"
            fill="url(#tower-grad-1)"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          {/* Tower Flanges */}
          <line x1="1329" y1="430" x2="1340" y2="430" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
          <line x1="1331" y1="330" x2="1338" y2="330" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />

          {/* Nacelle */}
          <path
            d="M1326 235 C1326 230 1332 227 1344 227 L1358 229 C1362 231 1363 235 1362 239 L1328 239 Z"
            fill="#F8FAFC"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          {/* Aviation Beacon */}
          <circle cx="1339" cy="225" r="2.5" fill="#E86526" filter="url(#beacon-glow)" />

          {/* Rotor Hub Spinner */}
          <ellipse cx="1326" cy="233" rx="5" ry="5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
          <circle cx="1326" cy="233" r="3" fill="#E86526" />

          {/* 3 Modern Tapered Airfoil Blades with Orange Tips */}
          <g>
            {/* Blade 1 (Points High Up ~85°) */}
            <path
              d="M1326 233 Q1332 165 1330 110"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M1331 130 L1330 110"
              stroke="#E86526"
              strokeWidth="4.8"
              strokeLinecap="round"
            />

            {/* Blade 2 (Points Down-Left ~205°) */}
            <path
              d="M1326 233 Q1280 275 1235 305"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M1250 295 L1235 305"
              stroke="#E86526"
              strokeWidth="4.8"
              strokeLinecap="round"
            />

            {/* Blade 3 (Points Down-Right ~325°) */}
            <path
              d="M1326 233 Q1375 270 1420 310"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M1405 297 L1420 310"
              stroke="#E86526"
              strokeWidth="4.8"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* ----------------------------------------------------
            TURBINE 1: FOREGROUND HERO WIND TURBINE (Full Illustrator Detail)
            ---------------------------------------------------- */}
        <g id="turbine-foreground-hero">
          {/* Foundation Flange & Ground Base Ring */}
          <ellipse cx="1187" cy="516" rx="14" ry="4" fill="#334155" stroke="#FFFFFF" strokeWidth="1.2" />
          <rect x="1184" y="492" width="6" height="12" rx="1.5" fill="#E86526" opacity="0.8" /> {/* Service Entry Door */}

          {/* Tower Tubular Cylinder with Taper & Section Rings */}
          <polygon
            points="1175,516 1199,516 1192,165 1182,165"
            fill="url(#tower-grad-1)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Tower Contour Highlights & Section Flanges */}
          <line x1="1186" y1="170" x2="1183" y2="512" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
          <line x1="1177" y1="415" x2="1197" y2="415" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
          <line x1="1180" y1="295" x2="1194" y2="295" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
          <line x1="1181" y1="210" x2="1193" y2="210" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />

          {/* Aerodynamic Nacelle (Turbine Generator Housing) */}
          <g id="hero-nacelle">
            <path
              d="M1172 165 C1172 157 1180 152 1198 152 L1218 154 C1225 156 1227 162 1226 168 L1175 168 Z"
              fill="#F8FAFC"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Nacelle Heat Exhaust / Cooling Louvers */}
            <line x1="1208" y1="158" x2="1220" y2="158" stroke="#64748B" strokeWidth="1.2" />
            <line x1="1208" y1="162" x2="1220" y2="162" stroke="#64748B" strokeWidth="1.2" />

            {/* Anemometer / Wind Vane Mast atop Nacelle */}
            <line x1="1214" y1="154" x2="1214" y2="144" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="1214" cy="144" r="1.5" fill="#CBD5E1" />

            {/* FAA / Aviation Safety Red-Orange Flashing Beacon */}
            <circle
              cx="1195"
              cy="150"
              r="3"
              fill="#E86526"
              filter="url(#beacon-glow)"
            />
            <circle cx="1195" cy="150" r="1.5" fill="#FFFFFF" />
          </g>

          {/* 3 Sculpted Airfoil Blades (Illustrator-grade Cambered Geometry) */}
          <g id="hero-blades">
            {/* Rotor Hub Spinner Bullet (Facing Left/Windward) */}
            <ellipse cx="1172" cy="163" rx="7" ry="7" fill="#F8FAFC" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="1172" cy="163" r="4.5" fill="#E86526" />

            {/* --- BLADE 1: Upper Blade (pointing Upwards-Left ~100°) --- */}
            {/* Main Airfoil Body (Tapered Root to Tip) */}
            <path
              d="M1171 160 
                 C1165 125, 1152 85, 1144 25 
                 C1146 25, 1154 85, 1173 158 Z"
              fill="url(#blade-grad-hero)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Centerline Aerodynamic Blade Spar Ridge */}
            <path
              d="M1172 158 Q1158 90 1144 25"
              stroke="#CBD5E1"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
            {/* Signature Sunloop Orange Tip (Aviation High-Visibility) */}
            <polygon
              points="1144,25 1146,55 1151,55 1144,25"
              fill="#E86526"
              stroke="#E86526"
              strokeWidth="1"
              filter="url(#orange-glow)"
            />
            <polygon
              points="1144,25 1146,55 1151,55 1144,25"
              fill="#E86526"
            />

            {/* --- BLADE 2: Lower Left Blade (~220°) --- */}
            {/* Main Airfoil Body */}
            <path
              d="M1168 165 
                 C1140 195, 1105 225, 1055 255 
                 C1057 253, 1115 220, 1173 167 Z"
              fill="url(#blade-grad-hero)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Aerodynamic Spine */}
            <path
              d="M1170 166 Q1115 215 1055 255"
              stroke="#CBD5E1"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
            {/* Signature Sunloop Orange Tip */}
            <polygon
              points="1055,255 1078,242 1082,246 1055,255"
              fill="#E86526"
              stroke="#E86526"
              strokeWidth="1"
              filter="url(#orange-glow)"
            />
            <polygon
              points="1055,255 1078,242 1082,246 1055,255"
              fill="#E86526"
            />

            {/* --- BLADE 3: Lower Right Blade (~340°) --- */}
            {/* Main Airfoil Body */}
            <path
              d="M1175 165 
                 C1210 185, 1250 205, 1305 228 
                 C1303 230, 1245 208, 1174 168 Z"
              fill="url(#blade-grad-hero)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Aerodynamic Spine */}
            <path
              d="M1175 166 Q1245 202 1305 228"
              stroke="#CBD5E1"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
            {/* Signature Sunloop Orange Tip */}
            <polygon
              points="1305,228 1280,218 1278,222 1305,228"
              fill="#E86526"
              stroke="#E86526"
              strokeWidth="1"
              filter="url(#orange-glow)"
            />
            <polygon
              points="1305,228 1280,218 1278,222 1305,228"
              fill="#E86526"
            />
          </g>
        </g>
      </g>

      {/* Grid Pulse & Interconnection Wave at Base */}
      <path
        d="M0 500 C300 480 500 515 720 495 C940 475 1180 510 1440 495"
        stroke="#E86526"
        strokeWidth="2.5"
        opacity="0.6"
      />
    </svg>
  );
}
