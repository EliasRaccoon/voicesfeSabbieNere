// non mi importa se sul db conosco la sua cartella dentale
// qui carico solo il necessario
export interface Blogger{
    id:number;
    nickname:string;
    bio:string;
}

export interface Blog{
    id:number;
    title:string;
    description:string;
    blogger:Blogger;
    posts?:BlogPost[];
}


export interface BlogPost{
    id:number;
    title:string;
    tags:string;
    content:string;
    date:string;
    blog:Blog;
}