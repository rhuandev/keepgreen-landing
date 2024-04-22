import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './loader.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'keep-green';

  isLoading$ = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.show(); // Ativa o loader ao iniciar o componente
    this.loadData();
  }

  loadData() {
    // Simulando um carregamento de dados
    setTimeout(() => {
      this.loaderService.hide(); // Esconde o loader após os dados serem "carregados"
    }, 1500); // Simula uma requisição de 1.5 segundos
  }
}
