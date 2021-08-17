// let xPos: number;
// let yPos: number;
// let mapPosition = [xPos, yPos];

let mapInfo = [];
for (let i = 0; i < 10; i++) {
  let pos = [];
  for (let j = 0; j < 10; j++) {
    pos = pos.concat([[i, j]]);
  }
  mapInfo[i] = pos;
}

export default mapInfo;
