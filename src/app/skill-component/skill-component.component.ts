import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {
  skillObject: any = [
    {
    'skillHeader':'WEB Technology',
    'skillTypes':[{
    chartLabel: 'HTML',
    chartWidth: '90',
    animationDelay:'0.3s'
  }, {
    chartLabel: 'CSS',
    chartWidth: '85',
    animationDelay:'0.5s'
  }, {
    chartLabel: 'JAVASCRIPT',
    chartWidth: '80',
    animationDelay:'0.7s'
  },{
    chartLabel: 'Angular',
    chartWidth: '60',
    animationDelay:'0.9s'
  },{
    chartLabel: 'UnderScore Js',
    chartWidth: '70',
    animationDelay:'1.1s'
  },
  {
    chartLabel: 'Es6',
    chartWidth: '50',
    animationDelay:'1.3s'
  }]
},
{
  'skillHeader':'Version Control',
  'skillTypes':[{
  chartLabel: 'Tortoise GIT',
  chartWidth: '80',
  animationDelay:'1.5s'
}, {
  chartLabel: 'SVN',
  chartWidth: '50',
  animationDelay:'1.7s'
}]
},
{
  'skillHeader':'Repository',
  'skillTypes':[{
  chartLabel: 'Github',
  chartWidth: '60',
  animationDelay:'1.9s'
}, {
  chartLabel: 'Stash',
  chartWidth: '70',
  animationDelay:'2.1s'
}]
},
{
  'skillHeader':'Data Tables',
  'skillTypes':[{
  chartLabel: 'JQX Gid',
  chartWidth: '80',
  animationDelay:'2.3s'
}, {
  chartLabel: 'Ag-grid',
  chartWidth: '65',
  animationDelay:'2.5s'
}]
},
{
  'skillHeader':'IDE',
  'skillTypes':[{
  chartLabel: 'NotePad++',
  chartWidth: '90',
  animationDelay:'2.7s'
},
{
  chartLabel: 'VS Code Editor',
  chartWidth: '90',
  animationDelay:'2.9s'
},
{
  chartLabel: 'Sublime',
  chartWidth: '50',
  animationDelay:'3.1s'
}, {
  chartLabel: 'Eclipse',
  chartWidth: '50',
  animationDelay:'3.3s'
}]
},
{
  'skillHeader':'Ms Office',
  'skillTypes':[{
  chartLabel: 'MS Word',
  chartWidth: '90',
  animationDelay:'3.5s'
},
{
  chartLabel: 'Ms Excel',
  chartWidth: '50',
  animationDelay:'3.7s'
},
{
  chartLabel: 'Power Point',
  chartWidth: '80',
  animationDelay:'3.9s'
}]
},
{
  'skillHeader':'Operating System',
  'skillTypes':[{
  chartLabel: 'Windows',
  chartWidth: '90',
  animationDelay:'4.1s'
}, {
  chartLabel: 'Ubundu(Linux)',
  chartWidth: '85',
  animationDelay:'4.3s'
}]
},
{
  'skillHeader':'Other Plugins',
  'skillTypes':[{
  chartLabel: 'Emmet',
  chartWidth: '90',
  animationDelay:'4.5s'
}]
}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
