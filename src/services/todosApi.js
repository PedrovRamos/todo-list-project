const URL = 'http://127.0.0.1:3000';

export async function todosApi() {
  try {
    const response = await fetch(`${URL}/todos`);
    console.log(response);
    return response.json();
  } catch (e) {
    console.log(e.message);
    // eslint-disable-next-line no-alert
    // eslint-disable-sonarjs/no-duplicate-string
    alert('Serviço indisponível');
    return [];
  }
}

export async function addTodo(todo) {
  const response = await fetch(`${URL}/todos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: todo,
      checked: false,
    }),
  });
  return response.json();
}

export async function updateTodo(todo) {
  const response = await fetch(`${URL}/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return response.json();
}