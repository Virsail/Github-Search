export class user {
showInfo: boolean;
  constructor(public created_at:string,public avatar_url:any,public followers_url:number,public following_url:number,public repos_url:string, public login:number,public public_repos:string){
      this.showInfo=false;
    }
}
