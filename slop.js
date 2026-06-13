// the tagline recurses forever, drifting upward (homepage only).
// two identical copies + a -50% scroll = a seamless infinite loop.
const track = document.getElementById("recursion-track");
if (track) {
  let unit = "agents ";
  for (let i = 0; i < 30; i++) unit += "building agents ";
  unit += "building <em>slop.</em><br>";
  track.innerHTML = unit + unit;
}

// the footer credit credits its own credit
const madeby = document.getElementById("madeby");
if (madeby) {
  madeby.addEventListener("click", () => {
    madeby.textContent += ", which were proudly made by recursive sloptaumatons";
  });
}
