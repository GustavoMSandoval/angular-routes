import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioModule } from "./pages/portfolio/portfolio.module";
import { MenuComponent } from "./shared/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rotas';
}
