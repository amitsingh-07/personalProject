import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  accordionItems: any[] = [
    {
      title: 'HTML - Hyper Text MArkup Language',
      body: `Web pages can be created and modified by using professional HTML editors.
      However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).
      We believe that using a simple text editor is a good way to learn HTML.
      Follow the steps below to create your first web page with Notepad or TextEdit.`,
      isOpen: true
    },
    {
      title: 'CSS - Cascading Style Sheet',
      body: `CSS stands for Cascading Style Sheets
      CSS describes how HTML elements are to be displayed on screen, paper, or in other media
      CSS saves a lot of work. It can control the layout of multiple web pages all at once
      External stylesheets are stored in CSS files`,
      isOpen: false
    },
    {
      title: 'JS - JavaScript',
      body: `Booleans can be objects (if defined with the new keyword)
      Numbers can be objects (if defined with the new keyword)
      Strings can be objects (if defined with the new keyword)
      Dates are always objects
      Maths are always objects
      Regular expressions are always objects
      Arrays are always objects
      Functions are always objects
      Objects are always objects`,
      isOpen: false
    }
  ]
}
