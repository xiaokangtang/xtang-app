import { Product } from "../../typings"

export type FilterProps = {
    categories: Product['category'][]
    onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Filter: React.FC<FilterProps> = ({ categories, onSelectChange }) => {
    return (
        <>
            <label htmlFor='categorySelect' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                Select a Category
            </label>
            <select defaultValue={'default'} id="categorySelect"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onSelectChange}>
                <option key="initialOption" value="default" disabled>please select a category</option>
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}

            </select>
        </>
    )

}

export default Filter