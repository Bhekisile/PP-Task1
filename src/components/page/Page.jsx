import { useState } from 'react';
import Button from '../button/Button';
import './Page.css';

const Page = () => {
  const [allChecked, setAllChecked] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (value === 'All pages') {
      if (checked) {
        setAllChecked(['Page 1', 'Page 2', 'Page 3', 'Page 4']);
      } else {
        setAllChecked([]);
      }
    } else if (checked) {
      setAllChecked([...allChecked, value]);
    } else {
      setAllChecked(allChecked.filter((item) => item !== value));
    }
  };

  const isAllPagesChecked = allChecked.length === 4;

  return (
    <div className="container">
      <div className="all-pages">
        <span className="text">All pages</span>
        <input
          type="checkbox"
          value="All pages"
          name="all"
          className="box"
          checked={isAllPagesChecked}
          onChange={handleChange}
        />
      </div>
      <hr className="line" />
      <div className="content">
        {['Page 1', 'Page 2', 'Page 3', 'Page 4'].map((page) => (
          <div className="single-page" key={page}>
            <span>{page}</span>
            <input
              type="checkbox"
              value={page}
              name={page.toLowerCase().replace(' ', '-')}
              className="box"
              checked={allChecked.includes(page)}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <hr className="line" />
      <Button />
    </div>
  );
};

export default Page;
