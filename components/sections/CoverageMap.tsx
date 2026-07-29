/**
 * Mapa de cobertura nacional.
 *
 * El contorno y los marcadores se declaran en coordenadas reales [lon, lat] y se
 * proyectan (equirectangular, corregida por la latitud media del país) al vuelo,
 * de modo que las plazas caen donde les corresponde sobre la silueta.
 */

type Point = [number, number];

const LON_MIN = -118;
const LAT_MAX = 33;
const SCALE = 20;
const LAT_K = 0.917; // cos(23.5°) — latitud media de México

const VB_W = 587;
const VB_H = 380;

const px = ([lon, lat]: Point): Point => [
  Math.round((lon - LON_MIN) * LAT_K * SCALE * 10) / 10,
  Math.round((LAT_MAX - lat) * SCALE * 10) / 10,
];

// Contorno simplificado de México, en sentido horario desde Tijuana.
const outline: Point[] = [
  // Baja California — costa del Pacífico
  [-117.12, 32.53], [-116.62, 31.85], [-116.30, 31.00], [-115.90, 30.00],
  [-115.20, 28.70], [-115.08, 27.85], [-114.10, 27.30], [-113.60, 26.70],
  [-112.30, 25.30], [-112.10, 24.60], [-111.20, 24.00], [-110.20, 23.30],
  [-109.85, 22.87],
  // Baja California — Golfo de California
  [-109.68, 23.06], [-109.42, 23.30], [-110.30, 24.15], [-110.60, 24.80],
  [-111.35, 26.00], [-112.27, 27.34], [-113.00, 28.40], [-113.55, 28.95],
  [-114.60, 30.20], [-114.83, 31.03], [-115.10, 31.70], [-114.85, 31.78],
  // Sonora y Sinaloa
  [-113.55, 31.30], [-112.80, 30.10], [-111.95, 28.82], [-110.90, 27.92],
  [-109.50, 26.70], [-109.05, 25.60], [-108.40, 25.00], [-107.90, 24.40],
  [-106.42, 23.19], [-105.70, 22.20], [-105.30, 21.55],
  // Costa del Pacífico central y sur
  [-105.68, 20.41], [-105.24, 20.62], [-104.32, 19.05], [-103.50, 18.40],
  [-102.20, 17.95], [-101.55, 17.64], [-99.90, 16.85], [-98.50, 16.35],
  [-97.07, 15.86], [-95.20, 16.17], [-94.30, 16.10], [-93.20, 15.55],
  [-92.40, 14.70], [-92.20, 14.53],
  // Frontera con Guatemala y Belice
  [-92.15, 15.20], [-91.73, 16.07], [-90.99, 17.25], [-90.99, 17.82],
  [-89.15, 17.82], [-89.15, 17.95], [-88.50, 18.20], [-88.30, 18.49],
  // Península de Yucatán
  [-87.85, 18.60], [-87.42, 20.21], [-87.07, 20.63], [-86.80, 21.16],
  [-87.00, 21.60], [-88.15, 21.60], [-89.66, 21.28], [-90.38, 20.86],
  [-90.53, 19.85], [-90.72, 19.35], [-91.83, 18.65], [-92.65, 18.55],
  // Costa del Golfo de México
  [-94.42, 18.15], [-96.13, 19.20], [-97.40, 21.00], [-97.85, 22.25],
  [-97.75, 23.80], [-97.75, 25.00], [-97.14, 25.95],
  // Frontera norte — Río Bravo
  [-97.50, 25.88], [-98.30, 26.10], [-98.82, 26.38], [-99.51, 27.51],
  [-100.50, 28.70], [-100.90, 29.36], [-101.40, 29.77], [-102.30, 29.88],
  [-102.95, 29.19], [-104.37, 29.56], [-105.00, 30.00], [-105.60, 30.80],
  [-106.45, 31.75],
  // Frontera norte — línea Gadsden
  [-108.21, 31.78], [-108.21, 31.33], [-111.07, 31.33], [-114.72, 32.72],
];

const path =
  outline.map((c, i) => `${i === 0 ? "M" : "L"}${px(c).join(" ")}`).join(" ") + " Z";

type Marker = {
  label: string;
  at: Point;
  anchor: "start" | "end";
  dx: number;
  dy: number;
  hq?: boolean;
};

const markers: Marker[] = [
  { label: "Sonora",     at: [-110.97, 29.07], anchor: "start", dx: 12, dy: 5 },
  { label: "Coahuila",   at: [-101.00, 25.42], anchor: "end",   dx: -12, dy: 5 },
  { label: "Monterrey",  at: [-100.31, 25.67], anchor: "start", dx: 14, dy: -6, hq: true },
  { label: "Tamaulipas", at: [-99.14, 23.74],  anchor: "start", dx: 12, dy: 12 },
  { label: "Guanajuato", at: [-101.26, 20.92], anchor: "end",   dx: -12, dy: 4 },
  { label: "CDMX",       at: [-99.13, 19.43],  anchor: "start", dx: 12, dy: 14 },
];

export default function CoverageMap() {
  return (
    <div>
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Mapa de cobertura de IRCA Consultores en México: sede en Monterrey, Nuevo León, con operación recurrente en Sonora, Coahuila, Tamaulipas, Guanajuato y Ciudad de México."
      >
        <path
          d={path}
          fill="var(--irca-green-50)"
          stroke="var(--irca-green-600)"
          strokeWidth={2}
          strokeLinejoin="round"
        />

        {markers.map(({ label, at, anchor, dx, dy, hq }) => {
          const [x, y] = px(at);
          return (
            <g key={label}>
              {hq && (
                <circle cx={x} cy={y} r={16} fill="var(--irca-green)" opacity={0.18} />
              )}
              <circle
                cx={x}
                cy={y}
                r={hq ? 7 : 5}
                fill={hq ? "var(--irca-green)" : "var(--irca-blue)"}
                stroke="#fff"
                strokeWidth={2}
              />
              <text
                x={x + dx}
                y={y + dy}
                textAnchor={anchor}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 700,
                  fill: hq ? "var(--irca-green-700)" : "var(--fg-3)",
                }}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 12 }}>
        {[
          { color: "var(--irca-green)", text: "Sede operativa" },
          { color: "var(--irca-blue)", text: "Operación recurrente" },
        ].map(({ color, text }) => (
          <span
            key={text}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--fg-4)", fontWeight: 600 }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 999, background: color, display: "inline-block" }} />
            {text}
          </span>
        ))}
        <span style={{ fontSize: 12, color: "var(--fg-4)", fontWeight: 600 }}>
          Cobertura nacional
        </span>
      </div>
    </div>
  );
}
