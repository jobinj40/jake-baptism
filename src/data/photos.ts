export type Photo = {src:string; alt:string; width:number; height:number; objectPositionMobile?:string; objectPositionDesktop?:string}
export const photos = {
  hero:{src:'/photos/hero/jake-hero.webp',alt:'Jake John Jobin wrapped in white',width:1616,height:1080,objectPositionMobile:'31% 50%',objectPositionDesktop:'50% 44%'},
  family:{src:'/photos/family/jake-family-candid.webp',alt:'Jake with his parents Ashly and Jobin',width:1023,height:1537},
  mother:{src:'/photos/family/jake-with-mom.webp',alt:'Ashly holding Jake close',width:1013,height:1800,objectPositionMobile:'50% 34%'},
  father:{src:'/photos/family/jake-with-dad.webp',alt:'Jobin tenderly holding Jake',width:998,height:1500},
  closing:{src:'/photos/family/jake-family-portrait.webp',alt:'Ashly and Jobin looking lovingly at Jake',width:998,height:1500,objectPositionMobile:'50% 42%'},
  story:[
    {src:'/photos/story/jake-red-portrait.webp',alt:'Jake in white against deep red',width:1080,height:1616},
    {src:'/photos/story/jake-little-gentleman.webp',alt:'Jake dressed as a little gentleman',width:1000,height:1500},
    {src:'/photos/story/jake-superman.webp',alt:'Jake in a playful Superman portrait',width:1024,height:1536},
    {src:'/photos/story/jake-sleeping.webp',alt:'Jake sleeping peacefully',width:900,height:1600},
  ] as Photo[],
  gallery:[
    {src:'/photos/story/jake-red-portrait.webp',alt:'Jake in white against deep red',width:1080,height:1616},
    {src:'/photos/family/jake-with-dad.webp',alt:'Jobin holding Jake',width:998,height:1500},
    {src:'/photos/story/jake-little-gentleman.webp',alt:'Jake as a little gentleman',width:1000,height:1500},
    {src:'/photos/family/jake-family-candid.webp',alt:'Jake with Ashly and Jobin',width:998,height:1500},
    {src:'/photos/story/jake-superman.webp',alt:'Jake in a playful Superman portrait',width:1000,height:1500},
    {src:'/photos/story/jake-sleeping.webp',alt:'Jake sleeping peacefully',width:900,height:1600},
    {src:'/photos/gallery/jake-gentleman-wide.webp',alt:'Jake in a cinematic wide portrait',width:1800,height:1200},
    {src:'/photos/family/jake-with-mom.webp',alt:'Ashly holding Jake',width:1013,height:1800},
  ] as Photo[],
}
