const dataSource = [
  {value: "1", groupId: 'a'},
  {value: "15", groupId: 'b'},
  {value: "7", groupId: 'a'},
  {value: "9", groupId: 'c'},
  {value: "5", groupId: 'b'},
  {value: "11"}
];
const groupAndSort = dataSource => {
  const map = dataSource.reduce((acc, cur) => {
    const groupId = cur.groupId || 'unGrouped';
    if (!acc[groupId]) {
      acc[groupId] = [];
    }
    acc[groupId].push(cur);
    return acc;
  }, {});

  Object.values(map).forEach(group => {
    group.sort((a, b) => {
      // 如果没有指定 value 属性，则默认为 0
      const valueA = a.value ? parseInt(a.value) : 0;
      const valueB = b.value ? parseInt(b.value) : 0;
      return valueA - valueB;
    });
  });

  return Object.values(map).sort((a, b) => {
    const groupIdA = a[0].groupId || 'unGrouped';
    const groupIdB = b[0].groupId || 'unGrouped';
    if (groupIdA === 'unGrouped' && groupIdB === 'unGrouped') {
      return 0;
    } else if (groupIdA === 'unGrouped') {
      return 1;
    } else if (groupIdB === 'unGrouped') {
      return -1;
    } else {
      return groupIdA.localeCompare(groupIdB);
    }
  });
};

console.log(groupAndSort(dataSource));
