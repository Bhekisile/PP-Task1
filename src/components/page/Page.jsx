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

  /* eslint-disable jsx-a11y/label-has-associated-control */

  return (
    <div className="container">
      <div className="all-pages">
        <span className="text">All pages</span>
        <label>
          <input
            type="checkbox"
            name="all"
            className="box"
            value="All pages"
            checked={isAllPagesChecked}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="content">
        {['Page 1', 'Page 2', 'Page 3', 'Page 4'].map((page) => (
          <div className="single-page" key={page}>
            <span>{page}</span>
            <label>
              <input
                type="checkbox"
                value={page}
                name={page.toLowerCase().replace(' ', '-')}
                className="box"
                checked={allChecked.includes(page)}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
      </div>
      <div className="line">
        <hr />
      </div>
      <Button />
    </div>
  );
};

export default Page;
