const cards = [
    {
      id: 'card-1',
      title: 'REACT HOOKS',
    },
    {
      id: 'card-2',
      title: 'REACT PERFORMANCE',
    },
    {
      id: 'card-3',
      title: 'REACT PATTERNS',
    },
    {
      id: 'card-4',
      title: 'REACT STATE',
    },
    {
      id: 'card-5',
      title: 'REACT LIFECYCLE METHOD',
    },
    {
      id: 'card-6',
      title: 'REACT ADVANCED HOOOKS',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'REACT HOOKS',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'REACT LIFECYCLE',
        cards:[]
      },
    },
    listIds: ['list-1','list-2'],
  };
  
  export default data;