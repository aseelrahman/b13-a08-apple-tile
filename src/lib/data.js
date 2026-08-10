export async function getTiles() {
  const res = await fetch("https://b13-a08-apple-tile.vercel.app/data.json");
  const tiles = await res.json();
  return tiles;
}
