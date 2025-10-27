const onSubmit = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(data);
};
export default onSubmit;
