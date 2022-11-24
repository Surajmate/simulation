import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
  tutorial_content: any;
  tutorials: any[] = [{
      name: 'HTML'
    },
    {
      name: 'CSS'
    },
    {
      name: 'Java'
    },
    {
      name: 'PHP'
    },
    {
      name: 'Laravel'
    },
    {
      name: 'Node'
    },
    {
      name: 'React'
    },
    {
      name: 'Angular'
    },
    {
      name: 'Javascript'
    },
    {
      name: 'Python'
    },
    {
      name: 'MySQL'
    },
    {
      name: 'MySQL'
    },
    {
      name: 'MySQL'
    },
    {
      name: 'MySQL'
    },
    {
      name: 'MySQL'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.fetch_tutorial("HTML");
  }

  fetch_tutorial(tutorial: any) {
    switch (tutorial) {
      case 'HTML': {
        this.tutorial_content = `<b>What is HTML?</b> <ul> <li> HTML stands for Hyper Text Markup Language </li>
          <li> HTML is the standard markup language for creating Web pages </li> <li> HTML consists of a series of elements </li>
          <li> HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc. </li>
          <li> HTML elements tell the browser how to display the content </li> <li> HTML describes the structure of a Web page </li> </ul>`;
        break;
      }
      case 'CSS': {
        this.tutorial_content = `<b>What is CSS?</b> <ul> <li> CSS stands for Hyper Text Markup Language </li>
        <li> CSS is the standard markup language for creating Web pages </li> <li> CSS consists of a series of elements </li>
        <li> CSS elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc. </li>
        <li> CSS elements tell the browser how to display the content </li> <li> CSS describes the structure of a Web page </li> </ul>`;
        break;
      }
      case 'Java': {
        this.tutorial_content = `<b>What is Java?</b> <ul> <li> Java stands for Hyper Text Markup Language </li>
        <li> Java is the standard markup language for creating Web pages </li> <li> Java consists of a series of elements </li>
        <li> Java elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc. </li>
        <li> Java elements tell the browser how to display the content </li> <li> Java describes the structure of a Web page </li> </ul>`;
        break;
      }
      case 'PHP': {
        this.tutorial_content = `<b>What is PHP?</b> <ul> <li> PHP stands for Hyper Text Markup Language </li>
        <li> PHP is the standard markup language for creating Web pages </li> <li> PHP consists of a series of elements </li>
        <li> PHP elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc. </li>
        <li> PHP elements tell the browser how to display the content </li> <li> PHP describes the structure of a Web page </li> </ul>`;
        break;
      }
      case 'Larravel': {
        this.tutorial_content = tutorial;
        break;
      }
      case 'Node': {
        this.tutorial_content = tutorial;
        break;
      }
      case 'React': {
        this.tutorial_content = tutorial;
        break;
      }
      case 'Angular': {
        this.tutorial_content = tutorial;
        break;
      }
      case 'Javascript': {
        this.tutorial_content = tutorial;
        break;
      }
      case 'Python': {
        this.tutorial_content = tutorial;
        break;
      }
      case 'MySQL': {
        this.tutorial_content = tutorial;
        break;
      }
      default: {
        this.tutorial_content = 'HTML';
        break;
      }
    }
  }

}
