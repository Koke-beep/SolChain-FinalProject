import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  ngOnInit (): void {
  }

  id = 'tsparticles';
    particlesUrl = 'http://foo.bar/particles.json';

    particlesOptions = {

      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'grab',
            distance: 200
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'

        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 3,
          straight: false
        },
        number: {
          density: {
            enable: true,
            value_area: 1000
          },
          value: 30
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: true,
          value: 3
        }
      },
      detectRetina: true
    };

    particlesLoaded (container: any): void {
      console.log(container)
    }

    particlesInit (main: any): void {
      console.log(main)
    }
}
