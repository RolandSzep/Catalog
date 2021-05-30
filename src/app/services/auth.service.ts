import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authState: any = null;

    constructor(private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(authState => {
        this.authState = authState;
      });
    }

    async logout(): Promise<void> {
        await this.afAuth.signOut();
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }

    authenticated(): boolean {
        return this.afAuth.authState !== null;
    }

    currentUserObservable(): any {
        return this.afAuth.authState;
    }

    /* newPassword(newPassword: string) {
    return this.afAuth.currentUser.then((user) => {
      return user.updatePassword(newPassword);
    });
  } */

    /*  newEmail(newEmail: string) {
       return this.afAuth.currentUser.then((user) => {
         return user.updateEmail(newEmail);
       });
     } */

    updateCurrentUserName(name: string) {
      return this.afAuth.currentUser.then((user) => {
        if (user == null) return null;
        return user.updateProfile({
          displayName: name
        });
      });
    }

    getCurrentUserName(): any {
      return this.authState.displayName;
    }

    getCurrentUserEmail(): any {
      return this.authState.email;
    }

    /* passwordRemind(email: string): Promise<void> {
      return this.afAuth.sendPasswordResetEmail(email);
    } */

    createUser(email: string, password: string, name?: string) {
      return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
        if (name) {
          this.updateCurrentUserName(name);
        }
        return result.user;
      });
    }

}
