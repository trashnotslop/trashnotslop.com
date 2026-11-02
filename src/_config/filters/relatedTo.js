export const relatedTo = (input, project) => {
  return input.filter(i => (i.data.projects ?? []).includes(project));
};
