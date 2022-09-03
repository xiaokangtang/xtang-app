import { useMapDataToTree } from '../../utils';

interface DataContainerProps {
  data: any[];
}

const DataContainer = ({ data }: DataContainerProps) => {
  const resultTrees = useMapDataToTree(data);
  console.log(resultTrees);
  let string = '';
  const renderString = (tree: any, level: number) => {
    const dashes = level > 0 ? '-'.repeat(level) : '';
    string += `${dashes} ${tree.name} </br>`;
    tree.children.forEach((child: any) => renderString(child, level + 1));
  };

  const treeRoot = data
    .filter((dataEntry) => dataEntry['parent_id'] === 0)
    .map((dataEntry) => resultTrees.get(dataEntry['id']));
  treeRoot.forEach((resultTree) => renderString(resultTree, 0));

  return <code dangerouslySetInnerHTML={{ __html: string }} />;
};

export default DataContainer;
