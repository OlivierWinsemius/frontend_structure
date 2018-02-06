import commonActions from '../../common/commonActions/actionsCombiner';
import * as timerActions  from './timerActions';

oliApp.actions = {
    ...commonActions,
    ...timerActions,
};