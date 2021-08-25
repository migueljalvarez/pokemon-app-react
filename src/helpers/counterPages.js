export const counterPages = (current, count, limit) => {
  return `${current}/${Math.ceil(count / limit)}`;
};
