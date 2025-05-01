let day = 'Wednesday';

switch (day) {
  case 'Monday':
    console.log('7 am');
    break;
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log('11 am');
    break;
  case 'Friday':
    console.log('12 am');
    break;
  default:
    console.log('9 am');
}