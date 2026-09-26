import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { OnboardingComponent } from './onboarding.component';
import { WorkspaceComponent } from './workspace.component';
import { PrivacyComponent } from './privacy.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'privacidade', component: PrivacyComponent },
  { path: 'app', component: WorkspaceComponent, canActivate: [authGuard] },
  { path: 'app/:section', component: WorkspaceComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
