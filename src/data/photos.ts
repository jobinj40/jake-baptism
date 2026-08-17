export type Photo = {src:string; alt:string; width:number; height:number; objectPositionMobile?:string; objectPositionDesktop?:string}
export const photos = {
  hero:{src:'/photos/hero/jake-hero.webp',alt:'Jake John Jobin wrapped in white',width:1616,height:1080,objectPositionMobile:'31% 50%',objectPositionDesktop:'50% 44%'},
  family:{src:'/photos/family/jake-family-candid.webp',alt:'Jake with his parents Ashly and Jobin',width:1023,height:1537},
  mother:{src:'/photos/family/jake-with-mom.webp',alt:'Ashly holding Jake close',width:1013,height:1800,objectPositionMobile:'50% 34%'},
  father:{src:'/photos/family/jake-with-dad.webp',alt:'Jobin tenderly holding Jake',width:998,height:1500},
  closing:{src:'/photos/family/jake-family-portrait.webp',alt:'Ashly and Jobin looking lovingly at Jake',width:998,height:1500,objectPositionMobile:'50% 42%'},
  story:[
    {src:'/photos/story/jake-sleeping.webp',alt:'Jake sleeping peacefully',width:900,height:1600},
  ] as Photo[],
  gallery:[
    {src:'/photos/family/jake-with-dad.webp',alt:'Jobin holding Jake',width:998,height:1500},
    {src:'/photos/family/jake-family-candid.webp',alt:'Jake with Ashly and Jobin',width:998,height:1500},
    {src:'/photos/story/jake-sleeping.webp',alt:'Jake sleeping peacefully',width:900,height:1600},
    {src:'/photos/family/jake-with-mom.webp',alt:'Ashly holding Jake',width:1013,height:1800},
    {src:'/photos/family/jake-family-portrait.webp',alt:'Ashly and Jobin looking lovingly at Jake',width:998,height:1500},
    {src:'/photos/hero/jake-hero.webp',alt:'Jake wrapped in white',width:1616,height:1080},
  ] as Photo[],
}
