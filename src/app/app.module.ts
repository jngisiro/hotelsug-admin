import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HotelDataService } from "./services/hotelData.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingComponent } from "./loading/loading.component";
import { AuthInterceptor } from "./services/authInterceptor.service";
import { AccountConfirmationComponent } from "./auth/account-confirmation/account-confirmation.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { FooterComponent } from "./footer/footer.component";
import { IndexComponent } from "./index/index.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { ReservationsComponent } from "./dashboard/reservations/reservations.component";
import { ReviewsComponent } from "./dashboard/reviews/reviews.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    LoadingComponent,
    AccountConfirmationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    FooterComponent,
    IndexComponent,
    DashboardComponent,
    ProfileComponent,
    ReservationsComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    HotelDataService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
