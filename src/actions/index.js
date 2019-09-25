export const createIdea = (newIdea) => ({
  type: 'CREATE_IDEA',
  newIdea
})

export const deleteIdea = (ideas) => ({
  type: 'DELETE_IDEA',
  ideas
})