export function useMapDataToTree(dataArray: any[]) {
  const resultMap = new Map();
  dataArray.forEach((dataEntry) => {
    dataEntry.children = [];
    resultMap.set(dataEntry['id'], dataEntry);
  });
  dataArray
    .filter((dataEntry) => dataEntry['parent_id'] !== 0)
    .forEach((notRootData) => {
      resultMap.get(notRootData['parent_id']).children.push(notRootData);
    });
  return resultMap;
}
