export default {
  state: {
    items: [
      {
        id: 'catalog-item-1',
        title: 'Basic Solution',
        image: '',
        avail: true,
        descr: 'Идеальное решение для дома, бизнес-центров, кафе, ресторанов, аэропортов, железнодорожных станций и других общественных мест. Простота установки и безопасность использования.',
        colors: ['#fff', '#000'],
        price: 1658,
        dscnt: 10,
        specs: {
          in: 'DC5V/2A, 9V/1.67A',
          out: '5V/1A, 9V/1,67A (10W)',
          frequency: '110-205 KHZ',
          dist: '6-10mm',
          protect: true,
          fast: true,
          colors: 'черная или белая поверхность + резиновые детали для предотвращения скольжения',
          wire: 'Qi (поддерживает все известные приемники Qi-стандартов)',
          interfaces: 'micro-USB, fast-charging 1.5м 4-жильный кабель в комплекте'
        }
      },
      {
        id: 'catalog-item-2',
        title: 'Premium Solution',
        image: '',
        avail: true,
        descr: 'Домашнее зарядное устройство De Luxe, выполненное в сочетании с металлом и стеклом, является стильным и приятным в использовании. Выбор цвета, соответствующего вашему интерьеру.',
        colors: ['#fff', '#000', '#2d4e80', '#e01221'],
        price: 1658,
        dscnt: 10,
        specs: {
          in: 'DC5V/2A, 9V/1.67A',
          out: '5V/1A, 9V/1,67A (10W)',
          frequency: '110-205 KHZ',
          dist: '6-10mm',
          protect: true,
          fast: true,
          colors: 'черная или белая поверхность + резиновые детали для предотвращения скольжения',
          wire: 'Qi (поддерживает все известные приемники Qi-стандартов)',
          interfaces: 'micro-USB, fast-charging 1.5м 4-жильный кабель в комплекте'
        }
      },
      {
        id: 'catalog-item-3',
        title: 'Desktop Embedded Fast Charge Solution',
        image: '',
        avail: true,
        descr: 'Идеальное решение для бизнес-центров, кафе, ресторанов, аэропортов, железнодорожных станций и других общественных мест. Простота установки и безопасность использования.',
        colors: ['#000'],
        price: 1658,
        dscnt: 10,
        specs: {
          in: 'DC5V/2A, 9V/1.67A',
          out: '5V/1A, 9V/1,67A (10W)',
          frequency: '110-205 KHZ',
          dist: '6-10mm',
          protect: true,
          fast: true,
          colors: 'черная или белая поверхность + резиновые детали для предотвращения скольжения',
          wire: 'Qi (поддерживает все известные приемники Qi-стандартов)',
          interfaces: 'micro-USB, fast-charging 1.5м 4-жильный кабель в комплекте'
        }
      },
      {
        id: 'catalog-item-4',
        title: 'Office Smart Solution',
        image: '',
        avail: false,
        descr: 'Не пропускайте сообщения и держите смартфон под рукой во время зарядки. Подставка удобна для видеозвонков во время зарядки. Смартфон можно разместить горизонтально, так и по вертикали.',
        colors: ['#000'],
        price: 1658,
        dscnt: 10,
        specs: {
          in: 'DC5V/2A, 9V/1.67A',
          out: '5V/1A, 9V/1,67A (10W)',
          frequency: '110-205 KHZ',
          dist: '6-10mm',
          protect: true,
          fast: true,
          colors: 'черная или белая поверхность + резиновые детали для предотвращения скольжения',
          wire: 'Qi (поддерживает все известные приемники Qi-стандартов)',
          interfaces: 'micro-USB, fast-charging 1.5м 4-жильный кабель в комплекте'
        }
      },
      {
        id: 'catalog-item-5',
        title: 'Aqua',
        image: '',        
        avail: true,
        descr: 'Dr Qi Aqua Wireless Chargers были созданы для людей, которые заботятся о своем образе жизни. Доступный и стильный - он сделает вас немного счастливее каждый день.',
        colors: ['#fff', '#000'],
        price: 1658,
        dscnt: 10,
        specs: {
          in: 'DC5V/2A, 9V/1.67A',
          out: '5V/1A, 9V/1,67A (10W)',
          frequency: '110-205 KHZ',
          dist: '6-10mm',
          protect: true,
          fast: true,
          colors: 'черная или белая поверхность + резиновые детали для предотвращения скольжения',
          wire: 'Qi (поддерживает все известные приемники Qi-стандартов)',
          interfaces: 'micro-USB, fast-charging 1.5м 4-жильный кабель в комплекте'
        }
      },
      {
        id: 'catalog-item-6',
        title: 'Car Perfect Fit solution',
        image: '',
        avail: true,
        descr: 'Элегантная комбинация из металла и пластика будет выглядеть идеально в любом автомобиле. Это зарядное устройство имеет вентиляцию, чтобы предотвратить перегрев вашего устройства.',
        colors: ['#fff', '#000'],
        price: 1658,
        dscnt: 10,
        specs: {
          in: 'DC5V/2A, 9V/1.67A',
          out: '5V/1A, 9V/1,67A (10W)',
          frequency: '110-205 KHZ',
          dist: '6-10mm',
          protect: true,
          fast: true,
          colors: 'черная или белая поверхность + резиновые детали для предотвращения скольжения',
          wire: 'Qi (поддерживает все известные приемники Qi-стандартов)',
          interfaces: 'micro-USB, fast-charging 1.5м 4-жильный кабель в комплекте'
        }
      }
    ],
    currItem: {}
  },
  mutations: {
    SET_CATALOG_CURR_ITEM: (state, item) => state.currItem = item
  }
}