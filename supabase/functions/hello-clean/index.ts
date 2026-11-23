console.log("Hello from Functions!");

export default {
  fetch: () => {
    return Response.json({ message: `Hello!` });
  },
};
