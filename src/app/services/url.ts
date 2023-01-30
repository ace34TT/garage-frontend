export const baseUrl = 'https://garage-y8mf.onrender.com/api/';

const repairsUrl = 'repairs/';
export const repairsUrls = {
  insert: baseUrl + repairsUrl + '/',
  unconfirmed: baseUrl + repairsUrl + 'unconfirmed/',
  confirm: baseUrl + repairsUrl + 'confirm/',
  unpaid: baseUrl + repairsUrl + 'unpaid/',
  // * undone toto
  undoneTodo: baseUrl + repairsUrl + 'todo/undone',
  confirmTodo: baseUrl + repairsUrl + 'todo/',
  // * all repairs
  allRepairs: baseUrl + repairsUrl + 'customer/',
  oneRepairByCustomer: baseUrl + repairsUrl + 'customer/',
};
