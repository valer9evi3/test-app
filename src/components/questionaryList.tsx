import { IQuestionary } from '../Interfaces';

const questionaryList: IQuestionary[] = [
  {
    id: 1,
    question: 'Сколько вам лет?',
    answers: ['16+', '20+', '30+', '40+'],
  },
  {
    id: 2,
    question: 'Как вас зовут?',
    answers: ['Антон', 'Игорь', 'Владилен', 'Другое'],
  },
  {
    id: 3,
    question: 'Ваш любимый фреймворк?',
    answers: ['React', 'Angular', 'Vue.js', 'JQuery'],
  },
  {
    id: 4,
    question: 'Ваш любимый хук?',
    answers: ['Справа', 'Слева', 'useState', 'useReducer'],
  },
];

export default questionaryList;
