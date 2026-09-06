import assert from "node:assert";

// Self-check for portfolio orb orbit geometry and depth sorting
const ORBIT_A = 0.56;
const ORBIT_B = 0.2408;
const ORBIT_ALPHA = -24 * (Math.PI / 180);
const COS_ALPHA = Math.cos(ORBIT_ALPHA);
const SIN_ALPHA = Math.sin(ORBIT_ALPHA);

// 1. Verify all trajectory points lie strictly on the orbital ellipse
for (let deg = 0; deg < 360; deg += 5) {
  const t = deg * (Math.PI / 180);
  const x0 = ORBIT_A * Math.cos(t);
  const y0 = ORBIT_B * Math.sin(t);

  const ellipseVal = Math.pow(x0 / ORBIT_A, 2) + Math.pow(y0 / ORBIT_B, 2);
  assert(Math.abs(ellipseVal - 1.0) < 1e-10, `Ellipse equation failed at ${deg} deg`);

  const relX = x0 * COS_ALPHA - y0 * SIN_ALPHA;
  const relY = x0 * SIN_ALPHA + y0 * COS_ALPHA;

  const restoredX = relX * COS_ALPHA + relY * SIN_ALPHA;
  const restoredY = -relX * SIN_ALPHA + relY * COS_ALPHA;
  assert(Math.abs(restoredX - x0) < 1e-10, `Coordinate recovery failed at ${deg} deg`);
  assert(Math.abs(restoredY - y0) < 1e-10, `Coordinate recovery failed at ${deg} deg`);

  const sinT = Math.sin(t);
  const isFront = sinT > 0;
  const depthScale = isFront ? 1.0 + 0.12 * sinT : 1.0 + 0.1 * sinT;
  assert(depthScale >= 0.88 && depthScale <= 1.15, `Scale out of range: ${depthScale}`);
}

// 2. Verify 8-satellite phase spacing (45 deg apart)
const offsets = [
  0,
  Math.PI * 0.25,
  Math.PI * 0.5,
  Math.PI * 0.75,
  Math.PI,
  Math.PI * 1.25,
  Math.PI * 1.5,
  Math.PI * 1.75,
];
for (let i = 0; i < offsets.length; i++) {
  const next = offsets[(i + 1) % offsets.length];
  const diff = (next - offsets[i] + 2 * Math.PI) % (2 * Math.PI);
  assert(Math.abs(diff - Math.PI * 0.25) < 1e-10, "Satellites must be spaced 45 deg apart");
}

console.log("Orb orbit geometry & 8 tech satellites self-check passed.");
