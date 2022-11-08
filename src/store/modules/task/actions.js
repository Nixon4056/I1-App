export default {
  async addTask(context, payload) {
    const id = Date.now();
    const data = {
      id: id,
      company: payload.company,
      title: payload.title,
      description: 'Dodaj opis...',
      employee: payload.employee,
      date: '21 Gru',
      status: payload.status,
      comments: payload.comments,
      logs: payload.logs,
    };

    const response = await fetch(
      `https://i1-app-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      }
    );

    /* const responseData = await response.json(); */

    if (!response.ok) {
      console.log('error in add Task');
    }

    context.commit('addTask', {
      ...data
    });
  },
  async loadTasks(context) {
    const response = await fetch(
      `https://i1-app-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      console.log('error in add Task');
    }
    const tasks = [];
    for (const key in responseData) {
      const task = {
        id: parseInt(key),
        company: responseData[key].company,
        title: responseData[key].title,
        description: responseData[key].description,
        employee: parseInt(responseData[key].employee),
        date: responseData[key].date,
        status: parseInt(responseData[key].status),
        comments: responseData[key].comments,
        logs: responseData[key].logs,
      };
      tasks.push(task);
    }
    context.commit('setTasks', tasks);
  },
  async changeStatus(context, payload){
    const task = payload
    const response = await fetch(
      `https://i1-app-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.id}/status.json`,
      {
        method: 'PUT',
        body: JSON.stringify(task.status),
      }
    );
    if (!response.ok) {
      console.log('error in add Task');
    }else{
      console.log(`zmieniono status na: ${task.status}`)
    }
    context.commit('changeStatus', task);
  },
  async changeDescription(context, payload){
    const task = payload
    const response = await fetch(
      `https://i1-app-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.id}/description.json`,
      {
        method: 'PUT',
        body: JSON.stringify(task.description),
      }
    );
    if (!response.ok) {
      console.log('error in add Task');
    }else{
      console.log(`dodano komentarz: ${task.description}`)
    }
    context.commit('changeDescription', task);
  },
  async addComment(context, payload){
    const task = payload
    const response = await fetch(
      `https://i1-app-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.id}/comments/${task.comment.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(task.comment),
      }
    );
    if (!response.ok) {
      console.log('error in add Task');
    }else{
      console.log(`dodano komentarz: ${task.comment.text}`)
    }
    context.commit('addComment', {
      ...task
    });
  },
};
