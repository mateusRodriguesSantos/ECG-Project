import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  public chart: any;
  intervalId: any;

  constructor() {}

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnInit(): void {}

  createChart() {
    const ctx = 'myChart';
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Eletrocardiograma',
            data: [],
            borderColor: 'red',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            suggestedMin: -0.01,
            suggestedMax: 0.01,
            ticks: {
              stepSize: 0.5,
            },
          },
        },
        elements: {
          point: {
            radius: 0,
            borderWidth: 0
          },
          line: {
            borderWidth: 3 // Aumenta a largura das linhas do gráfico
          }
        },
        animation: {
          duration: 1000, // Duração da animação (em milissegundos)
          easing: 'linear', // Efeito de animação (linear para uma transição suave)
        },
      },
    });

    this.startRandomAnimation();
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   // Redimensionar o gráfico com base no tamanho da janela do navegador
  //   if (this.chart) {
  //     this.chart.resize();
  //   }
  // }

  ngOnDestroy() {
    // Limpar o intervalo quando o componente é destruído
    clearInterval(this.intervalId);
  }

  // Função para iniciar loop infinito de animação aleatória
  startRandomAnimation() {
    this.intervalId = setInterval(() => {
      const newDataPoint = this.generateRandomECGData();
      this.chart.data.labels.push(this.chart.data.labels.length);
      this.chart.data.datasets[0].data.push(newDataPoint);
      this.chart.update();
    }, 1500); // Intervalo de 1500 ms (1.5 segundos)
  }

  // Função para gerar dados aleatórios de ECG
  generateRandomECGData(): number {
    const amplitude = 0.02;
    const frequency = 0.3;
    const noise = 0.01;
    const t = this.chart.data.labels.length / 500; // Tamanho máximo do gráfico (500 pontos)
    const value =
      amplitude * Math.sin(2 * Math.PI * frequency * t) +
      noise * (Math.random() - 0.5);
    return value;
  }
}
