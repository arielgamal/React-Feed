export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/arielgamal.png",
      name: "Ariel Gamal",
      role: "Dev Frontend"
    },
    content: [
      {type: "paragraph", content: "Fala galera =D"}, 
      {type: "paragraph", content: "Acabei upar um arquivo com todos os conteúdos de React native para estudo, chega mais."},
      {type: "link", content: "paulo.dev/pvmg"},
      {type: "link", content: "#ariel #novoprojeto #soudemais"}
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/PVGusmao.png",
      name: "Paulo Victor",
      role: "Dev Frontend React Mobile"
    },
    content: [
      {type: "paragraph", content: "Fala galera =D"}, 
      {type: "paragraph", content: "Acabei upar um arquivo com todos os conteúdos de React native para estudo, chega mais."},
      {type: "link", content: "paulo.dev/pvmg"},
      {type: "link", content: "#ariel #novoprojeto #soudemais"}
    ],
    publishedAt: new Date('2022-05-03 22:00:00'),
  },
];