export const logo ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const displayImg = "https://occ-0-4485-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const bgImg = "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg";
export const api_option = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_Key ,
    }
  };
  export const Img_Cdn_url= 'https://image.tmdb.org/t/p/w500';
  export const supportedLang = [
    {identifier: 'en', name: 'English'},
    {identifier: 'hindi', name: 'Hindi'},
    {identifier: 'beng', name: 'Bengali'}
  ];
  export const openAIkey = process.env.REACT_APP_OPENAI_KEY;