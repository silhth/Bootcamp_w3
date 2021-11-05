const deleteClass = (target, newClass) => {
    target.className = newClass
  }



  const addConts = (target, newClass) => {
    target.classList.toggle(newClass);
  }

  export {deleteClass, addConts}