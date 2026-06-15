import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './components/user-master/user-master';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { GetAPI } from './components/get-api/get-api';
import { BatchMaster } from './components/batch-master/batch-master';
import { ProjectCompetition } from './components/project-competition/project-competition';
import { SignalForm } from './components/signal-form/signal-form';
import { LifeCycle } from './components/life-cycle/life-cycle';

export const routes: Routes = [
{
    path: '',
    redirectTo:'databinding',
    pathMatch: 'full'
},
{
    path: 'databinding',
    component: DataBinding
},
{
    path: 'signal',
    component: Signal
},
{
    path: 'variables',
    component: Variables
},
{
    path: 'control-flow',
    component: ControlFlow
},
{
    path: 'dynamic-css-class',
    component: DynamicCssClass
},
{
    path: 'users',
    component: UserMaster
},
{
    path: 'reactive-users',
    component: ReactiveUser
},
{
    path: 'get-api',
    component: GetAPI
},
{
    path: 'batch-master',
    component: BatchMaster
},
{
    path: 'competition',
    component: ProjectCompetition
},
{
    path: 'signal-form',
    component: SignalForm
},
{
    path: 'life-cycle',
    component: LifeCycle
},
{
    path: '**',
    component: NotFound
}
];
