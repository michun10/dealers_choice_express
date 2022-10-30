data = [
  { name: "Phillipa Love", caps: 20, position: 1, team: "New Zealnd" },
  { name: "Luka Connor", caps: 9, position: 2, team: "New Zealand" },
  { name: "Amy Rule", caps: 7, position: 3, team: "New Zealand" },
  { name: "Joanah Ngan-Woo", caps: 11, position: 4, team: "New Zealand" },
  { name: "Chelsea Bremner", caps: 6, position: 5, team: "New Zealand" },
  { name: "Charmaine McMenemin", caps: 28, position: 6, team: "New Zealand" },
  { name: "Sarah Hirini", caps: 11, position: 7, team: "New Zealand" },
  { name: "Liana Mikaele-Tu'u", caps: 7, position: 8, team: "New Zealand" },
];

const getData = () => {
  return data;
};

const find = (position) => {
  const player = data.find((player) => player.position === +position);
  return { ...player };
};

module.exports = { getData, find };
