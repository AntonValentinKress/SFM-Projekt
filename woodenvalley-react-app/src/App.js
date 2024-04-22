import './index.css';

function App() {
  return (
    <>
    <form className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input type='text' id='item'></input>
      </div>
      <button className='btn'>Add</button>
    </form>
    <h1 className='Header'>ToDo List</h1>
    <u1 className='list'>
      <li>
        <label type='checkbox'>
          Step 1
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>
      <li>
        <label type='checkbox'>
          Step 2
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>
    </u1>
    </>
  );
}

export default App;
