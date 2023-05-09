import { Component } from '@angular/core';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-generator',
  templateUrl: './icon-generator.component.html',
  styleUrls: ['./icon-generator.component.css'],
})
export class IconGeneratorComponent {
  icons = Object.values(faIcons);
  isGenerating = false;

  icon: IconDefinition | null = null;

  getRandomIcon() {
    const randomIndex = Math.floor(Math.random() * this.icons.length);
    return this.icons[randomIndex];
  }

  generateIcon() {
    if (this.isGenerating) return;

    this.isGenerating = true;

    setTimeout(() => {
      this.icon = this.getRandomIcon() as IconDefinition;
      this.isGenerating = false;
    }, 3000);
  }
}
