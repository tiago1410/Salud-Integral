import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  

  constructor(private oauthService: OAuthService) { 
    this.initLogin();
    
  }

 

  initLogin() {
    const config: AuthConfig={
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '1027057700379-7phia682htg3t9milmmd9tglrmmk5jm0.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/list-articulos',
      scope: 'openid profile email',
      

    }
    this.oauthService.configure(config); 
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oauthService.initLoginFlow();
  }

  logout(){
    this.oauthService.logOut();
  }

  getProfile(){
    return this.oauthService.getIdentityClaims();
  }

  
  


}
