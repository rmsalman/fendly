import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FollowComponent } from './follow/follow.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { Home2Component } from './home-2/home-2.component';
import { PopupsComponent } from './popups/popups.component';

export const router: Routes = [

    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'home',component: HomeComponent },
    { path: 'feeds',component: FeedsComponent },
    { path: 'follow',component: FollowComponent },
    { path: 'other-profile',component: OtherProfileComponent },
    { path: 'user-profile',component: UserProfileComponent },
    { path: 'coming-soon',component: ComingSoonComponent },
    { path: 'home-2',component: Home2Component},
    { path: 'popups',component: PopupsComponent}
    

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);