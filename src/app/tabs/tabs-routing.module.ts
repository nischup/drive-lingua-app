import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'chapter/:id',
        loadChildren: () => import('../chapter/chapter.module').then( m => m.ChapterPageModule)
      },
      {
        path: 'chapter1',
        loadChildren: () => import('../chapter1/chapter1.module').then( m => m.Chapter1PageModule)
      },
      {
        path: 'chapter2',
        loadChildren: () => import('../chapter2/chapter2.module').then( m => m.Chapter2PageModule)
      },
      {
        path: 'chapter3',
        loadChildren: () => import('../chapter3/chapter3.module').then( m => m.Chapter3PageModule)
      },
      {
        path: 'chapter4',
        loadChildren: () => import('../chapter4/chapter4.module').then( m => m.Chapter4PageModule)
      },
      {
        path: 'chapter5',
        loadChildren: () => import('../chapter5/chapter5.module').then( m => m.Chapter5PageModule)
      },
      {
        path: 'chapter6',
        loadChildren: () => import('../chapter6/chapter6.module').then( m => m.Chapter6PageModule)
      },
      {
        path: 'chapter7',
        loadChildren: () => import('../chapter7/chapter7.module').then( m => m.Chapter7PageModule)
      },
      {
        path: 'chapter8',
        loadChildren: () => import('../chapter8/chapter8.module').then( m => m.Chapter8PageModule)
      },
      {
        path: 'chapter9',
        loadChildren: () => import('../chapter9/chapter9.module').then( m => m.Chapter9PageModule)
      },
      {
        path: 'chapter10',
        loadChildren: () => import('../chapter10/chapter10.module').then( m => m.Chapter10PageModule)
      },
      {
        path: 'introduction',
        loadChildren: () => import('../introduction/introduction.module').then( m => m.IntroductionPageModule)
      },
      {
        path: 'vocabulary',
        loadChildren: () => import('../vocabulary/vocabulary.module').then( m => m.VocabularyPageModule)
      },
      {
        path: 'sentence',
        loadChildren: () => import('../sentence/sentence.module').then( m => m.SentencePageModule)
      },
      {
        path: 'video',
        loadChildren: () => import('../video/video.module').then( m => m.VideoPageModule)
      },
      {
        path: 'test-answer',
        loadChildren: () => import('../test-answer/test-answer.module').then( m => m.TestAnswerPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
