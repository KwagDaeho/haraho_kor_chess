const Gimul = [
  {
    id: 1,
    name: "wang",
    point: 0,
  },
  {
    id: 2,
    name: "cha",
    point: 13,
  },
  {
    id: 3,
    name: "pho",
    point: 7,
  },
  {
    id: 4,
    name: "ma",
    point: 5,
  },
  {
    id: 5,
    name: "sang",
    point: 3,
  },
  {
    id: 6,
    name: "sa",
    point: 3,
  },
  {
    id: 7,
    name: "jol",
    point: 2,
  },
];
function move() {
  const moveUp = function (gimul, beforePosition) {};
  const moveLeft = function (gimul, beforePosition) {};
  const moveRight = function (gimul, beforePosition) {};
  const moveDown = function (gimul, beforePosition) {};
  const moveUpLeft = function (gimul, beforePosition) {};
  const moveUpRight = function (gimul, beforePosition) {};
  const moveDownLeft = function (gimul, beforePosition) {};
  const moveDownRight = function (gimul, beforePosition) {};
}

function renderGimul(gimul) {
  return <Gimul key={gimul.id} name={gimul.name} point={gimul.point} />;
}
export default renderGimul;
