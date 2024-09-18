import { Component } from '@angular/core';
import { tools } from '../../data';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css',
})
export class ToolsComponent {
  tools = tools;
}
