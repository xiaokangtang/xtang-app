import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchContainerProps {
  onSubmit: (searchValue: string) => void;
}

const SearchContainer = ({ onSubmit }: SearchContainerProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchEmpty, setSearchEmpty] = useState<boolean>(false);
  const onInputChange = (value: string) => {
    setSearchValue(value);
    if (value) {
      setSearchEmpty(false);
    }
  };
  const debouncedSearch = useDebouncedCallback(
    (value) => onInputChange(value),
    500
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });

  const onSubmitClick = () => {
    console.log(searchValue);
    if (searchValue) {
      onSubmit(searchValue);
    } else {
      setSearchEmpty(true);
    }
  };

  return (
    <div className="flex flex-col p-10 w-1/2">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <input
            className="rounded-md border p-3 text-16 w-full"
            placeholder="Search"
            onChange={(e) => debouncedSearch(e.target.value)}
            type="search"
          />
        </div>

        <button
          className="rounded-md border border-blue-500 h-12 w-20 ml-4"
          onClick={onSubmitClick}>
          Submit
        </button>
      </div>
      {searchEmpty && (
        <p className="text-sm font-light text-rose-700">
          Please enter some text
        </p>
      )}
    </div>
  );
};

export default SearchContainer;
